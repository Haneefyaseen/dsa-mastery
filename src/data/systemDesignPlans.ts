import type { SystemDesignPlan } from "@/types";

export const systemDesignPlans: SystemDesignPlan[] = [
  {
    id: "8-week-system-design",
    name: "8-Week System Design Prep",
    duration: "8 weeks",
    description:
      "Structured system design curriculum for mid-level (L4/E4) interviews at Meta, Google, Amazon, OpenAI, and Goldman Sachs engineering roles. Complete after mastering DSA fundamentals.",
    weeks: [
      {
        week: 1,
        title: "Foundations",
        topics: ["Networking", "APIs", "Databases"],
        goals: [
          "Understand client-server architecture",
          "Learn REST vs RPC vs GraphQL",
          "Compare SQL vs NoSQL tradeoffs",
        ],
        designProblems: [],
        keyConcepts: [
          "HTTP/HTTPS, TCP, DNS",
          "REST API design (resources, status codes, idempotency)",
          "SQL: ACID, indexes, normalization",
          "NoSQL: document (MongoDB), key-value (Redis), wide-column (Cassandra)",
        ],
      },
      {
        week: 2,
        title: "Scaling & Performance",
        topics: ["Load Balancing", "Caching", "CDN"],
        goals: [
          "Scale read-heavy systems",
          "Design caching layers",
          "Reduce latency with CDNs",
        ],
        designProblems: ["Design a Rate Limiter"],
        keyConcepts: [
          "Horizontal vs vertical scaling",
          "Load balancers (round-robin, least connections, consistent hashing)",
          "Cache strategies: cache-aside, write-through, write-back",
          "CDN for static assets; edge caching",
          "Redis for session store and hot data",
        ],
      },
      {
        week: 3,
        title: "Database Deep Dive",
        topics: ["Replication", "Sharding", "Consistency"],
        goals: [
          "Design for high availability",
          "Partition data at scale",
          "Understand CAP theorem",
        ],
        designProblems: ["Design a URL Shortener"],
        keyConcepts: [
          "Primary-replica replication; read replicas",
          "Sharding strategies: hash-based, range-based, directory-based",
          "CAP theorem: consistency vs availability",
          "Strong vs eventual consistency",
          "Database indexing and query optimization",
        ],
      },
      {
        week: 4,
        title: "Distributed Systems",
        topics: ["Message Queues", "Microservices", "Coordination"],
        goals: [
          "Decouple services with async messaging",
          "Understand microservice tradeoffs",
          "Handle distributed coordination",
        ],
        designProblems: ["Design a Notification System"],
        keyConcepts: [
          "Message queues: Kafka, RabbitMQ, SQS",
          "Pub/sub vs point-to-point",
          "Microservices vs monolith tradeoffs",
          "Service discovery, API gateway",
          "Leader election, distributed locks",
        ],
      },
      {
        week: 5,
        title: "Social & Feed Systems",
        topics: ["Fan-out", "Timelines", "Graph Data"],
        goals: [
          "Design news feed / timeline",
          "Handle fan-out on write vs read",
          "Model social graph relationships",
        ],
        designProblems: ["Design Twitter / News Feed", "Design Instagram"],
        keyConcepts: [
          "Fan-out on write vs fan-out on read",
          "Push vs pull model for feeds",
          "Celebrity user problem (hot keys)",
          "Graph DB for social connections",
          "Content ranking and personalization basics",
        ],
      },
      {
        week: 6,
        title: "Storage & Media",
        topics: ["Object Storage", "Streaming", "Search"],
        goals: [
          "Design file storage systems",
          "Handle video streaming at scale",
          "Build search infrastructure basics",
        ],
        designProblems: ["Design Dropbox / Google Drive", "Design YouTube"],
        keyConcepts: [
          "Object storage (S3): buckets, metadata vs blob",
          "Chunking, deduplication, sync conflicts",
          "Video: transcoding, adaptive bitrate (HLS/DASH)",
          "CDN for video delivery",
          "Inverted index for search; Elasticsearch basics",
        ],
      },
      {
        week: 7,
        title: "Real-Time & Chat",
        topics: ["WebSockets", "Chat", "Presence"],
        goals: [
          "Design real-time messaging",
          "Handle online presence",
          "Scale chat to millions of users",
        ],
        designProblems: ["Design WhatsApp / Messenger", "Design a Live Comments System"],
        keyConcepts: [
          "WebSockets vs long polling vs SSE",
          "Chat: message ordering, delivery guarantees",
          "Group chat: fan-out and storage",
          "Online presence with heartbeat",
          "End-to-end encryption overview",
        ],
      },
      {
        week: 8,
        title: "Mock Interviews & Review",
        topics: ["Tradeoffs", "Estimation", "Communication"],
        goals: [
          "Practice full 45-min system design mocks",
          "Back-of-envelope capacity estimation",
          "Communicate tradeoffs clearly",
        ],
        designProblems: [
          "Design Uber / Ride Sharing",
          "Design a Web Crawler",
          "Design a Distributed Cache",
          "Design LeetCode / Online Judge",
        ],
        keyConcepts: [
          "RESHADE framework: Requirements, Estimation, Storage, High-level, API, Detailed, Evaluation",
          "QPS estimation, storage sizing, bandwidth",
          "Single points of failure and bottlenecks",
          "How to say 'it depends' with structured tradeoffs",
          "Review all previous weeks' designs",
        ],
      },
    ],
  },
];

export function getSystemDesignPlanById(id: string) {
  return systemDesignPlans.find((p) => p.id === id);
}
