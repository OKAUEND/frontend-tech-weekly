import { expect, describe, test } from "vitest";
import { parseFrontMatter } from "./formatter";

describe("parseFrontMatter", () => {
  const MOCK_MARKDOWN = `---
title: "Hello"
description: "World"
date: "2021-01-01"
tags:
  - "test"
  - "vitest"
---
# Hello World`;

  test("フロントマターがない場合、エラー値が返される事", () => {
    const source = "# Hello World";

    expect(() => parseFrontMatter(source)).toThrowError(
      "フロントマターの設定を取得できません"
    );
  });
  test("フロントマターがある場合には、フロントマターが解析されその情報が返されること", () => {
    const result = parseFrontMatter(MOCK_MARKDOWN);

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
