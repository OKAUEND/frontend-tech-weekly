/**
 * FrontMatterの型定義
 */
export type FrontMatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

/**
 * parseFrontMatterの戻り値の型定義
 */
export type ParsedContent = {
  frontmatter: FrontMatter;
  content: string;
};

/**
 * MarkdownファイルのFrontMatterの情報をオブジェクト化する
 * @param source MDXファイルの内容
 * @returns FrontMatterとコンテンツの情報を含むオブジェクト
 */
export const parseFrontMatter = (source: string): ParsedContent => {
  return {
    frontmatter: {
      title: "title",
      description: "description",
      date: "date",
      tags: ["tags"],
    },
    content: source,
  };
};
