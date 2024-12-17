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
  //フロントマターの開始インデックスの3つのハイフンを探す
  const frontmatterStartHyphen = source.indexOf("---");

  if (frontmatterStartHyphen === -1) {
    throw new Error("フロントマターの設定を取得できません");
  }

  const frontmatterEndHyphen = source.indexOf(
    "---",
    frontmatterStartHyphen + 3
  );

  if (frontmatterEndHyphen === -1) {
    throw new Error("フロントマターの終了が定義できていません");
  }

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
