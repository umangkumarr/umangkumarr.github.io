export interface StackItem {
  category: string;
  description: string;
  name: string;
  url: string;
}

export const categories = ["Languages", "Frameworks", "Databases"] as const;

export const stack: StackItem[] = [
  {
    category: "Languages",
    description: "Primary language for services at Meesho.",
    name: "Java",
    url: "https://www.java.com",
  },
  {
    category: "Languages",
    description: "Fast, small services and tooling.",
    name: "Go",
    url: "https://go.dev",
  },
  {
    category: "Languages",
    description: "Competitive programming weapon of choice.",
    name: "C++",
    url: "https://isocpp.org",
  },
  {
    category: "Languages",
    description: "Where it all started — close to the metal.",
    name: "C",
    url: "https://en.cppreference.com/w/c",
  },
  {
    category: "Languages",
    description: "Scripts, analysis and ML experiments.",
    name: "Python",
    url: "https://www.python.org",
  },
  {
    category: "Languages",
    description: "The web bits.",
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    category: "Frameworks",
    description: "Backbone of every Java service I ship.",
    name: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
  },
  {
    category: "Frameworks",
    description: "Event pipelines and async processing.",
    name: "Kafka",
    url: "https://kafka.apache.org",
  },
  {
    category: "Databases",
    description: "Relational workhorse.",
    name: "MySQL",
    url: "https://www.mysql.com",
  },
  {
    category: "Databases",
    description: "Documents when the schema wants to move.",
    name: "MongoDB",
    url: "https://www.mongodb.com",
  },
  {
    category: "Databases",
    description: "Caching and hot-path state.",
    name: "Redis",
    url: "https://redis.io",
  },
  {
    category: "Databases",
    description: "In-process caching for the hottest paths.",
    name: "Caffeine",
    url: "https://github.com/ben-manes/caffeine",
  },
  {
    category: "Databases",
    description: "Wide-column storage at scale.",
    name: "Bigtable",
    url: "https://cloud.google.com/bigtable",
  },
];
