# 8月1週目

---

## 最新のバニラJavaScriptでのメモリ効率のよいDOM操作の方法

[Patterns for Memory Efficient DOM Manipulation with Modern Vanilla JavaScript](https://frontendmasters.com/blog/patterns-for-memory-efficient-dom-manipulation/)

バニラJavaScriptでフレームワークを使わずにDOMを操作する方法を解説しています。
フレームワークを使わずにバニラJavaScriptを用いる理由としては、厳密にパフォーマンスを制御する必要な場面で採用する場合であり、Visual Studio Codeは実際にバニラJavaScriptで開発されています。
バニラJavaScriptを操作する上では、フレームワークでDOMを操作するよりも多くの手順が必要であり、またパフォーマンスに気をつけつつ、最新のバニラJavaScriptではどう行うかを解説しています。

---

## 開発する上での最適なAI機能を見つける方法

[How to integrate AI into your business – Vercel](https://vercel.com/blog/how-to-integrate-ai-into-your-business)

Vercelが開発する上で目的の機能を開発していく上で、適切なAI機能を見つけ組織として導入していくためにおすすめなフレームワークを紹介しています。
（とはいえ、主にVercel製のフレームワークや機能紹介となっているので、Vercel外でおすすめのフレームワークやツールはあまり書かれてない

---

## Vercel AI SDK 3.3をリリース

[Vercel AI SDK 3.3 – Vercel](https://vercel.com/blog/vercel-ai-sdk-3-3)

Vercelが提供しているJavaScriptとTypeScript向けのAIアプリケーションを構築するためのツールキットです。主に、Vercelが提供している機能とAI機能を紐づけて使用するためのツールとなっている模様です。

---

## 正規表現解析ライブラリの解析方法の比較

[JSで書かれたECMAScript RegExpパーサーの比較 | Memory ice cubes](https://leaysgur.github.io/posts/2024/08/05/143855/)

正規表現解析いASTで扱うために変換を行っている、主に3つの公開の早い順から実装方法を見ています。実装方法としてや設計としての良い点と、まずい点や不満点などが書かれています。

※ASTとは？
AST(Abstract Syntax Tree)のことで、抽象構文木と呼ばれている。
JavaScriptではJSON形式で表現されている。
よく見るconsole.logとかで表現されるオブジェクトの構造とは別物かも。