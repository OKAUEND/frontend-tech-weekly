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

  //フロントマター部分を取り出す
  const frontmatterRaw = source
    .slice(frontmatterStartHyphen + 3, frontmatterEndHyphen)
    .trim();

  /**
   * 記事のタイトル
   */
  const frontmatterTitle = frontmatterRaw.match(/title:\s*"?([^"\n]+)"?/);

  /**
   * 記事の説明文
   */
  const frontmatterDescription = frontmatterRaw.match(
    /description:\s*"?([^"\n]+)"?/
  );

  /**
   * 記事の日時
   */
  const frontmatterDate = frontmatterRaw.match(/description:\s*"?([^"\n]+)"?/);

  /**
   * 記事のタグ(複数)
   */
  // タグは複数存在する可能性があるため、別途パースを行う
  const frontmatterTagsRegex = frontmatterRaw.match(
    /tags:\s*\n((?:\s*-\s*"?[^"\n]+"?\n?)+)/
  );

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
