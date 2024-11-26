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
});
