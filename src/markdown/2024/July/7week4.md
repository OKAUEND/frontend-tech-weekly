# 7月4週目

---

## React Conf 2024の全Talks動画を公開

[React Conf 2024 Talks](https://conf.react.dev/talks)

5月に行われたオフラインイベントのReact Conf 2024のセッション毎の動画が公開されました。

---

## TypeScript 5.6 Betaを公開

[Announcing TypeScript 5.6 Beta - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6-beta/)

TypeScript5.5をリリースしたばかりですが、5.6のBetaが公開されました。

目玉の機能の一つとしては、ESLintにもある `no-constant-binary-expression` をTypeScript側でも検知できるようになったことです。このおかげで、IF文などの箇所で常にtrue/nullなどでnullチェックが特定のチェックで、常にtrueの時やnullの時などはエラーが発生するようになりました。