## Bun 次のバージョンでnode:http2をサポート

https://x.com/bunjavascript/status/1847014951661326396

JavaScriptとTypeScript環境のオールインワンツールキットが、次のバージョンでnode:http2をサポートすると告知しました。
Bunがサポートすると言っているnode:http2とはHTTP/2プロトコルでNode.jsを使いサーバーを構築する手段の一つであるみたいです。
**感想**
世の中にはツールキットも色々あるのと、nodeでサーバー組み立てることはやったことがないので、一度チャレンジしてみたいなと思いました。

---

## **svelte ver5.0.0をリリース**

https://github.com/sveltejs/svelte/releases/tag/svelte%405.0.0

JavaScriptフレームワークの一つである**svelte**がver5.0をリリースしました。
パフォーマンスの改善や、TypeScriptのネイティブサポートなどが盛り込まれています。
ネイティブ構文が変更されたり、新しいrunes APIと呼ばれる状態管理へ移行する感じとなります。

```tsx
<script>
	let count = $state(0);
</script>
```

**感想**

大きくAPIを変更ということで、私の感覚としてはVue2からVue3を思い出し、うまく馴染んでくれるかとかで少し不安がある印象です。

---

## ECMAScript 2025に向けて**Proposalsが固まり始める**

https://ecmascript-daily.github.io/ecmascript/2024/10/12/ecmascript-proposal-update

JavaScriptの標準規格等を決めているECMAScriptが、いくつかの**Proposals**をStage4へ格上げしました。これで、ECMAScript2025でリリースされる内容が見えてきた感じになると思います。

Promise.tryやインポート属性、ECMAScriptでの正規表現パターン修飾子の追加などをあげられています。
**感想**

Promise.tryやインポート属性などで次の規格がどうなるかを今回取り上げてみましたが、より詳しく調べてみたい件かなと感じました