# 5月5週

## Next.js 15 RC　が利用可能に

https://nextjs.org/blog/next-15-rc

おもな変更点

- Recat 19 RC の対応
- Reactコンパイラの実験的対応
- fetchのキャッシュ周りの破壊的変更
    - デフォルトでのキャッシュ対応がされなくなる

等

## Node.js v20.14.0(LTS)のリリース

https://nodejs.org/en/blog/release/v20.14.0

## Storybook v8.1のリリース

https://storybook.js.org/blog/storybook-8-1/

- StorybookのUI上から、対象のtsxを選ぶことでStoryを作成可能に
- 安全な型のモジュールモックを作成する設定が追加
- RSCのコンポーネントユニットテストが可能に
- Playwrightを利用しコンポーネントテストのテストケースを簡単に作成可能に

## Storybookのコンポーネントテスト用ポータブルストーリー

https://storybook.js.org/blog/portable-stories-for-playwright-ct/

Storybook + Playwrightの環境で、テスト作成がより容易になりStorybookで作成したストーリーの再利用性を高めるアップデート

## React 19のZenn本がリリース

[React 19の新機能まるわかり](https://zenn.dev/uhyo/books/react-19-new)

うひょ氏による、React19の新機能まるわかり本がリリース。
React19で追加された機能等をわかりやすく書いてるよ！

## デジタル庁がダッシュボード開発の実践ガイドブックを公開

[ダッシュボードデザインの実践ガイドブックとチャート・コンポーネントライブラリ（ベータ版）｜デジタル庁](https://www.digital.go.jp/resources/dashboard-guidebook)

5月30日にデジタル庁がダッシュボード開発を行う上での実践ガイドブックと開発ツールやコンポーネントライブラリなどを公開

ダッシュボードを作る上で見やすい作り方やノウハウなどを提供するみたい

# 6月1週

## TypeScript 5.5 RC

[Announcing TypeScript 5.5 RC - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-rc/)

TypeScript 5.5のリリース候補版が公開

型推論が最適化され、 `find` や  `filter` で `undefined` を除外できるようになりました！

## Vitest 2.0.0 Beta-5が公開

https://github.com/vitest-dev/vitest/releases/tag/v2.0.0-beta.5

ブラウザモードの改善やカバレッジサポートなどが行われています。

## Vitest ブラウザモードについての方針を公開

[Vitest Browser Mode · vitest-dev vitest · Discussion #5828](https://github.com/vitest-dev/vitest/discussions/5828)

Vitestにおけるブラウザモードの説明と、今後どうするかの解説をIssueとして公開されています

## ESLint9 FlatConfigeへのマイグレーションツール

[Introducing the ESLint Configuration Migrator - ESLint - Pluggable JavaScript Linter](https://eslint.org/blog/2024/05/eslint-configuration-migrator/)

ESLintは最近のバージョンから設定ファイルの構造を大きく破壊的変更を行おうとしています。

今回、公式でFlatConfigへのマイグレーションツールが公開されました。

## Biome v1.8を公開？

[Biome on Twitter / X](https://x.com/biomejs/status/1797963672004043040)

ESLintなどの複雑な設定を1つにまとめることを目的としたBiomeのVer1.8が公開されました

ただ、公式のブログには公開記事が書かれていない状態です。

npmのサイトを見るとv1.8.1になっているので、バージョンアップ自体は行われている感じかも

[npm: @biomejs/biome](https://www.npmjs.com/package/@biomejs/biome)

# 6月2週

## VercelのテンプレートにSupabaseが追加

[Supabase – Vercel](https://vercel.com/integrations/supabase)

VercelのテンプレートにSupabaseが追加されました。
以後このテンプレート参考にVercelとSupabaseの運用が可能になります。

> Supabaseとは
オープンソースのPostgresデータベース。
公式ではFirebaseの代替を宣言しており、公式が提供しているライブラリなどを利用して、
簡単にバックエンドレスでDBや認証などを行うことができる。
> 

---

## Vite 5.3.0 リリース

[vite/packages/vite/CHANGELOG.md at main · vitejs/vite](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#530-2024-06-13)

Viteの5.3.0がリリースされました。

tsconfigの構成を確認できるtsconfck機能がTS5.5に対応していたり、

アセット機能として `bmp` 拡張子を持つ画像に対応していたりしています。
また、モジュールローダーとして人気のsystemjsがViteに追加され、ライブラリフォーマットに加えられサポートされるようになりました。

なお、6月14日に5.3.1がリリースされています。

---

## Nuxt 3.12 がリリース

[Nuxt 3.12 · Nuxt Blog](https://nuxt.com/blog/v3-12)

Nuxt4への移行準備として、機能フラグをONにすることで、Nuxt4の変更点を試すことができるようになりました。
他にはリリース準備中の [NuxtScripts](https://scripts.nuxt.com/) をNuxtアプリに取り込むためのスタブ `**@nuxt/scripts**` が事前に用意されていたりします。

---

## Vue.jsの3.4.28がリリースされました

[core/CHANGELOG.md at main · vuejs/core](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3428-2024-06-14)

今回は主にバグ修正が主になっております。

---

## Nuxt2の正式サポート終了日が告知？

[Nuxt 2 End-of-Life (EOL) · Nuxt Blog](https://nuxt.com/blog/nuxt2-eol)

2024年6月30日をもってNuxt2のサポートが終了となり、以後はセキュリティ対策や更新などのサポートがなくなります。
Nuxt3へアップデートを行うか、Nuxt 2 Never-Ending Supportを購入することで引き続きサポートを受けることができますが、通常使用ではNuxt2は6月30日で終了となります。

またそれに伴い、最終バージョンの2.18.0が6月末にリリースされ、引き続き利用する場合はこれらにアップデートをすることが推奨されている。

# 6月2週

## VercelのテンプレートにSupabaseが追加

[Supabase – Vercel](https://vercel.com/integrations/supabase)

VercelのテンプレートにSupabaseが追加されました。
以後このテンプレート参考にVercelとSupabaseの運用が可能になります。

> Supabaseとは
オープンソースのPostgresデータベース。
公式ではFirebaseの代替を宣言しており、公式が提供しているライブラリなどを利用して、
簡単にバックエンドレスでDBや認証などを行うことができる。
> 

---

## Vite 5.3.0 リリース

[vite/packages/vite/CHANGELOG.md at main · vitejs/vite](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#530-2024-06-13)

Viteの5.3.0がリリースされました。

tsconfigの構成を確認できるtsconfck機能がTS5.5に対応していたり、

アセット機能として `bmp` 拡張子を持つ画像に対応していたりしています。
また、モジュールローダーとして人気のsystemjsがViteに追加され、ライブラリフォーマットに加えられサポートされるようになりました。

なお、6月14日に5.3.1がリリースされています。

---

## Nuxt 3.12 がリリース

[Nuxt 3.12 · Nuxt Blog](https://nuxt.com/blog/v3-12)

Nuxt4への移行準備として、機能フラグをONにすることで、Nuxt4の変更点を試すことができるようになりました。
他にはリリース準備中の [NuxtScripts](https://scripts.nuxt.com/) をNuxtアプリに取り込むためのスタブ `**@nuxt/scripts**` が事前に用意されていたりします。

---

## Vue.jsの3.4.28がリリースされました

[core/CHANGELOG.md at main · vuejs/core](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3428-2024-06-14)

今回は主にバグ修正が主になっております。

---

## Nuxt2の正式サポート終了日が告知？

[Nuxt 2 End-of-Life (EOL) · Nuxt Blog](https://nuxt.com/blog/nuxt2-eol)

2024年6月30日をもってNuxt2のサポートが終了となり、以後はセキュリティ対策や更新などのサポートがなくなります。
Nuxt3へアップデートを行うか、Nuxt 2 Never-Ending Supportを購入することで引き続きサポートを受けることができますが、通常使用ではNuxt2は6月30日で終了となります。

またそれに伴い、最終バージョンの2.18.0が6月末にリリースされ、引き続き利用する場合はこれらにアップデートをすることが推奨されている。