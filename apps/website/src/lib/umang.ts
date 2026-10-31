import { defineLifeline } from "./lifeline/define";

/**
 * Extras the renderer already supports:
 * - `companies`: ids with a mark in company-icon.astro render the logo;
 *   anything else falls back to an initial in a ring (meesho, k2q do this).
 * - Events can be plain strings or segment arrays with links, as below.
 */
const record = defineLifeline({
  birthYear: 2003,
  description:
    "The life and career of Umang Kumar — from NIT Delhi to building commerce systems at Meesho.",
  milestones: {
    2003: {
      events: ["I was born in India."],
      id: "born",
    },
    2020: {
      events: [
        "Started a B.Tech in Computer Science and Engineering at the National Institute of Technology, Delhi.",
      ],
      id: "nit-delhi",
    },
    2021: {
      events: [
        [
          { type: "text", value: "Won the " },
          {
            href: "https://certificate.givemycertificate.com/c/58ff8797-cdc0-4fd4-9d39-a9bfc409f35b",
            type: "link",
            value: "Salesforce Codathon",
          },
          {
            type: "text",
            value: " at Cognizance '21, organised by IIT Roorkee.",
          },
        ],
      ],
      id: "codathon",
    },
    2022: {
      events: [
        "Reached Global Rank 389 in Google Kickstart Round F, and 478 in Round G.",
        [
          { type: "text", value: "Built " },
          {
            href: "https://drive.google.com/file/d/122vEA07__T2WAldwHQdFJ2XJEYJ5Hlu6/view",
            type: "link",
            value: "Book Exchange Center",
          },
          {
            type: "text",
            value:
              ", a platform for students to exchange, borrow and review books.",
          },
        ],
      ],
      id: "kickstart",
    },
    2023: {
      companies: [{ id: "k2q", name: "K2Q Capital" }],
      events: [
        "Interned at K2Q Capital — built a CNN model predicting stock performance at 80% accuracy.",
        [
          { type: "text", value: "Became a Guardian on " },
          {
            href: "https://leetcode.com/hidemysecrets/",
            type: "link",
            value: "LeetCode",
          },
          { type: "text", value: " (max rating 2252) and an Expert on " },
          {
            href: "https://codeforces.com/profile/alive",
            type: "link",
            value: "Codeforces",
          },
          { type: "text", value: " (max rating 1675)." },
        ],
        [
          { type: "text", value: "Finalist at " },
          {
            href: "https://www.netcredential.com/verify/nrwrb7f335",
            type: "link",
            value: "Encode '23",
          },
          {
            type: "text",
            value: ", the Bosch-sponsored hackathon at IIT Guwahati.",
          },
        ],
      ],
      id: "k2q",
    },
    2024: {
      companies: [{ id: "meesho", name: "Meesho" }],
      events: [
        "Joined Meesho in Bengaluru as an SDE intern — built the branded-packaging relinking feature from scratch, now serving 15% of BP requests.",
        "Graduated from NIT Delhi.",
        "Converted to SDE I — re-architected the legacy returns approval workflow into a new service with modular boundaries and idempotent processing.",
      ],
      id: "meesho",
    },
    2025: {
      events: [
        "Owned pre-order guardrails across 520M+ product IDs with a change-only sync strategy, and shipped upfront delivery dates for exchange orders.",
        "Promoted to SDE II.",
      ],
      id: "sde-two",
    },
    2026: {
      events: [
        "Designed the Dynamic Rule Engine — runtime rule evaluation with caching, kill-switches and experimentation, adopted by 25+ teams.",
        "Led the 3PL revamp of return reallocation into a config-driven, event-based pipeline handling 1M+ orders a day.",
      ],
      id: "rule-engine",
    },
  },
  name: "Umang Kumar",
  slug: "umang",
});

export const umangLifeline = record;
