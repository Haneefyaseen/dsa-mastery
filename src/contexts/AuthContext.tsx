"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ProblemStatus, UserProgress } from "@/types";
import {
  getProgress as getLocalProgress,
  saveProgress as saveLocalProgress,
  updateProblemStatus as updateLocalStatus,
  toggleBookmark as toggleLocalBookmark,
  saveNote as saveLocalNote,
} from "@/lib/progress";

interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  progress: UserProgress;
  loading: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  register: (name: string, email: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  updateStatus: (problemId: string, status: ProblemStatus) => Promise<void>;
  updateNote: (problemId: string, note: string) => Promise<void>;
  toggleBookmark: (problemId: string) => Promise<void>;
  refresh: () => Promise<void>;
}

const defaultProgress: UserProgress = {
  problems: {},
  notes: {},
  bookmarks: [],
  streak: 0,
  lastActiveDate: "",
  solvedCount: 0,
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.user) {
        setUser(data.user);
        setProgress(data.progress ?? defaultProgress);
      } else {
        setUser(null);
        setProgress(getLocalProgress());
      }
    } catch {
      setUser(null);
      setProgress(getLocalProgress());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = async (email: string, password: string) => {
    const localProgress = getLocalProgress();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, localProgress }),
    });
    const data = await res.json();
    if (!res.ok) return data.error || "Login failed";
    await refresh();
    return null;
  };

  const register = async (name: string, email: string, password: string) => {
    const localProgress = getLocalProgress();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, localProgress }),
    });
    const data = await res.json();
    if (!res.ok) return data.error || "Registration failed";
    localStorage.removeItem("dsa-mastery-progress");
    await refresh();
    return null;
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setProgress(getLocalProgress());
  };

  const updateStatus = async (problemId: string, status: ProblemStatus) => {
    if (user) {
      const res = await fetch("/api/progress", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "status", problemId, status }),
      });
      if (res.ok) setProgress(await res.json());
    } else {
      setProgress(updateLocalStatus(problemId, status));
    }
  };

  const updateNote = async (problemId: string, note: string) => {
    if (user) {
      const res = await fetch("/api/progress", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "note", problemId, note }),
      });
      if (res.ok) setProgress(await res.json());
    } else {
      setProgress(saveLocalNote(problemId, note));
    }
  };

  const toggleBookmark = async (problemId: string) => {
    if (user) {
      const res = await fetch("/api/progress", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "bookmark", problemId }),
      });
      if (res.ok) setProgress(await res.json());
    } else {
      setProgress(toggleLocalBookmark(problemId));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        progress,
        loading,
        login,
        register,
        logout,
        updateStatus,
        updateNote,
        toggleBookmark,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
