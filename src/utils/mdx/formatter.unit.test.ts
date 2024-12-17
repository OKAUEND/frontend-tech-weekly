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

  const MOCK_MARKDOWN_NO_FRONTMATTER = `---
title: ""
description: ""
date: ""
tags:
  - ""
  - ""
---
# Hello World`;

  test("フロントマターがない場合、エラー値が返される事", () => {
    const source = "# Hello World";

    expect(() => parseFrontMatter(source)).toThrowError(
      "フロントマターの設定を取得できません"
    );
  });
  test("フロントマターの終わりのHyphenがない場合、エラー値が返される事", () => {
    const source = `---`;

    expect(() => parseFrontMatter(source)).toThrowError(
      "フロントマターの終了が定義できていません"
    );
  });
  test("フロントマターに必要な情報が含まれていない場合、エラーが発生するか", () => {
    expect(() => parseFrontMatter(MOCK_MARKDOWN_NO_FRONTMATTER)).toThrowError(
      "記事に必要な設定情報が存在しません"
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
