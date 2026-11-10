/**
 * Best-effort, per-instance rate limiting for the chat endpoint.
 *
 * This protects a single server instance from accidental bursts. A deployment
 * that scales to multiple instances should replace the in-memory store with a
 * shared store (for example Redis or Upstash) so the limit is global.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;
const MAX_TRACKED_CLIENTS = 10_000;

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

function pruneExpired(now: number) {
  if (buckets.size < MAX_TRACKED_CLIENTS) return;

  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/** Resolve the client key from the proxy headers Vercel forwards. */
export function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function checkRateLimit(key: string): {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
} {
  const now = Date.now();
  pruneExpired(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, retryAfter: 0 };
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;

  return {
    allowed: true,
    remaining: MAX_REQUESTS - existing.count,
    retryAfter: 0,
  };
}
