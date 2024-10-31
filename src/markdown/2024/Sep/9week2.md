---

## TypeScript 5.6リリース

[Announcing TypeScript 5.6 - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6/)

[TypeScript 5.6のリリース候補版を発表](https://www.notion.so/TypeScript-5-6-7032db432da64f8d9cd1fe4feaf3aebd?pvs=21) されたTypeScriptですが、5.6がこの度正式にリリースされました。
いや、早すぎますね。まだ5.5もキャッチアップとコードをかけてないのに…

---

## Hono 4.6.0リリース

https://github.com/honojs/hono/releases/tag/v4.6.0

小型でシンプルかつ超高速との謳い文句であるWebフレームワークの一つであるHonoが4.6をリリースしました。
4.6のアップデートで、Node.jsでAsyncLocalStorageハンドラー外部でもコンテキストオブジェクトを使えるよう `contextStorage` が実装されました！

### AsyncLocalStorageとは

[Asynchronous context tracking | Node.js v22.9.0 Documentation](https://nodejs.org/api/async_context.html#class-asynclocalstorage)

Node.jsのクラスのひとつで、ver22.9.0でリリース
非同期処理を通じて一貫性を維持しつつ、データを格納できるストレージです。
パフォーマンスが高く、メモリリークなどもなく安全な実装となっています。

---

## Biome 1.9リリース

[Biome v1.9 Anniversary Release](https://biomejs.dev/blog/biome-v1-9/)

Linter + formmaterのBiomeが1.9をリリースしました。
このバージョンのリリースで、Biomeは1周年となります。
今回のアップデートで、CSS formatterとLinterの機能が安定バージョンとなり、標準で有効機能となったため、標準のCSS構文のみ解析しチェックすることができるようになりました。
（逆に言えば、SCSSなどのCSSの派生はまだチェックできない）
**GraphQL**に対するformatterとLinterも提供されるようになり、あとは[Prettier v3.3](https://github.com/prettier/prettier/blob/main/CHANGELOG.md#333)に合わせた機能追加も行われています。

---

## Vite 6.0Beta.0を公開

https://github.com/vitejs/vite/releases/tag/v6.0.0-beta.0

更新履歴はhttps://github.com/vitejs/vite/blob/v6.0.0-beta.0/packages/vite/CHANGELOG.md
ベータ版のVite 6.0がリリースされました。
更新履歴を見た感じでは修正やリファクタリングが主体であるように見えます。
機能追加は今後のBetaが進んだ時に行われるのかな？

---

## Nuxt OG Image 3をリリース

[v3.0.0 · Nuxt SEO](https://nuxtseo.com/og-image/releases/v3-major)

Nuxtアプリで使われる動的に画像を生成するツールのNuxt OG Image 3.0が公開されました。
TOPに記載されている更新内容をピックすると、最終的に使用するためにレンダリングが事前レンダリングか最終ビルドかを変更できるゼロランタイムモードが追加されたみたいです。
これにより、node_modulesのサイズが23MB削減されたようです。