import { describe, expect, test } from "bun:test";

import { buildUrl, url } from "../src/lib/url";

describe("buildUrl", () => {
  test("uses https in production", () => {
    expect(buildUrl("production", "umangkumarr.github.io")).toBe(
      "https://umangkumarr.github.io"
    );
  });

  test("uses http outside production", () => {
    expect(buildUrl("development", "umangkumarr.github.io")).toBe(
      "http://umangkumarr.github.io"
    );
  });

  test("falls back to localhost:3010 in development when no origin is set", () => {
    const previous = process.env.DEPLOY_ORIGIN;
    delete process.env.DEPLOY_ORIGIN;

    expect(buildUrl("development")).toBe("http://localhost:3010");

    if (previous !== undefined) {
      process.env.DEPLOY_ORIGIN = previous;
    }
  });

  test("falls back to the GitHub Pages origin in production", () => {
    const previous = process.env.DEPLOY_ORIGIN;
    delete process.env.DEPLOY_ORIGIN;

    expect(buildUrl("production")).toBe("https://umangkumarr.github.io");

    if (previous !== undefined) {
      process.env.DEPLOY_ORIGIN = previous;
    }
  });

  test("uses DEPLOY_ORIGIN when set", () => {
    expect(buildUrl("production", "example.com")).toBe("https://example.com");
  });
});

describe("url", () => {
  test("is a valid absolute url", () => {
    expect(url).toMatch(/^https?:\/\/.+/u);
  });
});
