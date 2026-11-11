import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { checkRateLimit, getClientKey } from "@/lib/chat/rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows ten requests and blocks the eleventh", () => {
    for (let i = 0; i < 10; i += 1) {
      expect(checkRateLimit("rate-limit-blocked").allowed).toBe(true);
    }

    const blocked = checkRateLimit("rate-limit-blocked");

    expect(blocked.allowed).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.retryAfter).toBeGreaterThan(0);
  });

  it("resets a client after the one-minute window", () => {
    for (let i = 0; i < 10; i += 1) {
      checkRateLimit("rate-limit-reset");
    }

    vi.advanceTimersByTime(60_000);

    expect(checkRateLimit("rate-limit-reset").allowed).toBe(true);
  });

  it("tracks clients independently", () => {
    for (let i = 0; i < 10; i += 1) {
      checkRateLimit("rate-limit-client-a");
    }

    expect(checkRateLimit("rate-limit-client-a").allowed).toBe(false);
    expect(checkRateLimit("rate-limit-client-b").allowed).toBe(true);
  });
});

describe("getClientKey", () => {
  it("uses the first address in x-forwarded-for", () => {
    const request = new Request("http://localhost/api/chat", {
      headers: { "x-forwarded-for": "203.0.113.7, 10.0.0.1" },
    });

    expect(getClientKey(request)).toBe("203.0.113.7");
  });

  it("falls back to x-real-ip", () => {
    const request = new Request("http://localhost/api/chat", {
      headers: { "x-real-ip": "198.51.100.4" },
    });

    expect(getClientKey(request)).toBe("198.51.100.4");
  });

  it("falls back to a shared unknown key", () => {
    const request = new Request("http://localhost/api/chat");

    expect(getClientKey(request)).toBe("unknown");
  });
});
