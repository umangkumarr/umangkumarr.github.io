export interface WritingItem {
  // Additional credited authors beyond me, for co-authored works.
  coAuthors?: { name: string; url: string }[];
  description: string;
  publisher: string;
  // Schema.org type for the JSON-LD item; defaults to Article.
  schemaType?: "CreativeWork";
  title: string;
  url: string;
  year: number;
}

// Blog posts, newest first. The writing page shows a friendly empty state
// while this is empty.
export const writing: WritingItem[] = [
  {
    description:
      "The initial outage is rarely what takes a system down — the recovery is. On thundering herds, replayed side effects, and designing systems that come back safely.",
    publisher: "Medium",
    title: "Why Most Distributed Systems Fail During Recovery, Not Failure",
    url: "https://medium.com/@umang4409/why-most-distributed-systems-fail-during-recovery-not-failure-8dae43d00ada",
    year: 2026,
  },
];
