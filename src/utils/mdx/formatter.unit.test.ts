import { expect, describe, test } from "vitest";
import { parseFrontMatter } from "./formatter";

describe("parseFrontMatter", () => {
  test("フロントマターがない場合、デフォルト値が返されること", () => {
    const source = "# Hello World";
    const result = parseFrontMatter(source);

    expect(result).toMatchObject({
      frontmatter: {
        title: "title",
        description: "description",
        date: "date",
        tags: ["tags"],
      },
      content: source,
    });
  });
  test("フロントマターがある場合には、フロントマターが解析されその情報が返されること", () => {
    const source = `---
title: "Hello"
description: "World"
date: "2021-01-01"
tags:
  - "test"
  - "vitest"
---
# Hello World`;
    const result = parseFrontMatter(source);

    expect(result).toMatchObject({
      frontmatter: {
        title: "Hello",
        description: "World",
        date: "2021-01-01",
        tags: ["test", "vitest"],
      },
      content: "# Hello World",
    });
  });
});
