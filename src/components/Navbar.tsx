"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Brain,
  BookOpen,
  Code2,
  LayoutDashboard,
  LogIn,
  LogOut,
  Route,
  Sparkles,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const links = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/study-plan", label: "Study Plan", icon: Route },
  { href: "/topics", label: "Topics", icon: BookOpen },
  { href: "/problems", label: "Problems", icon: Code2 },
  { href: "/patterns", label: "Patterns", icon: Sparkles },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout, loading } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <Brain className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="hidden sm:inline">DSA Mastery</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === href || (href !== "/" && pathname.startsWith(href))
                    ? "bg-accent/15 text-accent-hover"
                    : "text-muted hover:bg-card hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{label}</span>
              </Link>
            ))}
          </nav>

          <div className="ml-2 border-l border-border pl-2">
            {!loading && (
              user ? (
                <div className="flex items-center gap-2">
                  <span className="hidden items-center gap-1.5 text-sm text-muted lg:flex">
                    <User className="h-4 w-4" />
                    {user.name}
                  </span>
                  <button
                    onClick={() => logout()}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted hover:bg-card hover:text-foreground"
                    title="Sign out"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 rounded-lg bg-accent/15 px-3 py-2 text-sm font-medium text-accent-hover hover:bg-accent/25"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="hidden sm:inline">Login</span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
