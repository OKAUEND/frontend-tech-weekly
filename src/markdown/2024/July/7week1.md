# 7月1週目

---

## ECMAScript2024が正式リリース

[Ecma International approves ECMAScript 2024: What’s new?](https://2ality.com/2024/06/ecmascript-2024.html)

去年から今年1月までにFinishedしたproposalの仕様がES2024としてリリースされました！

Promise外で `resolve/reject` を実行する https://github.com/tc39/proposal-promise-with-resolvers 、

ArrayBufferをリサイズするオプションなどが追加されました。

---

## PlayWright ver1.45.0をリリース

https://github.com/microsoft/playwright/releases/tag/v1.45.0

新しいClockAPIが実装され、テスト内で時間を操作し時間関連の動作テストの検証が可能となり、より多くのテストシナリオをカバーできるようになりました。

---

## JavaScriptのエコシステムのパフォーマンス向上を目的としたプロダクトが立ち上げ

[GitHub - e18e/e18e](https://github.com/e18e/e18e?tab=readme-ov-file)

JavaScript環境のパフォーマンス向上とした個人のエンジニアやグループが立ち上げたばかりのプロダクト。
このプロダクトは主に、

- CleanUp：既存パッケージを最新へ更新、もしくはより軽量高速な代替手段への移行
- SpeedUp：リンターを通じて、パッケージの更新や代替品への更新を提案。実装コード上で処理が重い処理を警告表示する（例としては配列メソッドの連鎖など）
- LevelUp：最新の機能提供を通じ、パッケージのインストールサイズが大幅に削減される

---

## 2023年のStorybookの動きを振り返る

[State of JS 2023: Fighting back from a sharp left hook](https://storybook.js.org/blog/state-of-js-2023/)

State of JS 調査の2023年のグラフを見ながら、2023年におけるStorybookの動きや人気などを振り返る記事です。

2022年はうまくプロダクトと普及が進んでいたのが、2023年になりネガティブな意見が増えてきた事により、Storybookの開発チームは安定性とパフォーマンスの向上、サポート対象を増やすなど、地盤を固める方針をとったことなどが振り替えっています。
ネガティブな意見が減ったとはいえ、まだまだ2024年にはやるべき改善も多いと締めくくっています。