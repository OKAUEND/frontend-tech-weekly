# 10月2週目

---

## TypeScript 5.7 ベータ

[Announcing TypeScript 5.7 Beta - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-7-beta/)

TypeScriptの5.7βがリリースされました。

この5.7では、主に以下のことが対応予定となります。

- 初期化されていない変数の監視
    - 変数を宣言したブロック内では監視していたが、別関数で呼び出された時にはされていなかった
- 相対パスの書き換え
- ECMAScript2024をサポート
- TypeScriptの構成ファイルをシナリオに合致したのを見つけるまで検索
- 検索対象を厳密化したことに対する検索の高速化

等があります。

**感想**

初期化されていない変数の監視や検索などは体験として色々変わりそうだなと感じましたが、相対パスの書き換えに関してがイマイチしっくりこなかった感じがありました。

---

## **eslint-plugin-react-hooks@5.0.0 リリース**

https://github.com/facebook/react/releases/tag/eslint-plugin-react-hooks%405.0.0

eslint用プラグインのreact-hookのプラグインライブラリの5.0がリリースされました。
主な対応はESLint v9 のサポートと新しい構文チェックの定義が増やされ違反項目が増えました。

新しい違反としては、Hookが呼び出されるコンポーネント名は大文字で必ず始める事となります。

例:

```tsx
const _Component = () => {
	useHook() //<- Error!!!
}
```

**感想**

_Componentみたいな形式でコンポーネント名を作るってことをしたことがなかったので、そういう流儀で決めているプロダクトがある感じなんだなと思いました。

---

## Playwright 1.48.0 リリース

https://github.com/microsoft/playwright/releases/tag/v1.48.0

Playwrightの1.48.0がリリースされました。

今回のアップデートでは**WebSocketルーティング**の新しいメソッドが追加されました。
playwrightのページで設定されているWebSocketの通信のMockなどを行えます。

他にはUIの更新が行われ、レポートの注釈やコピーボタンなど設置され、操作性などが改善されています。