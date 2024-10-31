---

[Announcing TypeScript 5.6 RC - TypeScript](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6-rc/)

## TypeScript 5.6のリリース候補版を発表

TypeScript5.5が正式リリースされた直後ですが、早くも5.6リリース候補版が発表されました。
新機能以外として、5.6ではtsconfig.jsonを探す行為を親ディレクトリまで遡って走査していましたが、パフォーマンスやより多くの参照プロジェクトのディレクトリなどが開かれる可能性があるため、以前の走査へ戻されたようです。

今回もいくつかの新機能が追加されています。

### 想定外の常にTruethyになる条件文を監視

```tsx
if (/0x[0-9a-f]/) {
    // Oops! This block always runs.
    // 入力した文字がなんでも通りそう
    // ...
}

if (x => 0) {
    // Oops! This block always runs.
    // 0含む0以上だったらなんでも通っちゃう…
    // ...
}
```

このような条件文は今まではTypeScriptはスルーしていましたが、チェックしたほうがいいとの意見もあり5.6で監視するようになりました。
他にもイテレーターに対するヘルパーメソッドが追加されたりなど、任意のモジュール識別子のサポートを行うなどの対応が入っています。

```tsx
const banana = "🍌";

export { banana as "🍌" };
```

一見ただの遊びや賑やかしのように見えますが、他言語との相互運用をするために使えると想定しているらしいです。（本当にそう運用する人いるんだろうか？🤔

---

## React Email 3.0をリリース

[React Email 3.0 · Resend](https://resend.com/blog/react-email-3)

React+TypeScriptの環境でEmailを送信可能な環境をモダンに構築できるプロダクトのVer3.0がリリースされました。

対応としては、React19 リリース候補版のサポートを事前に行ない、将来の互換性の確保を行なっていたり、古いrender周りを廃止しSuspenseとServer Components対応のrenderへ置き換えをおこなったりしています。

---

## Nuxt ver3.13をリリース

[Nuxt 3.13 · Nuxt Blog](https://nuxt.com/blog/v3-13)

Nuxt 3.13がリリースされました。
主な変更点としてはRoot Groupの機能が実装され、ルートのディレクトリに括弧や角括弧を使った命名が可能となりました。
他には、Vue TypeScriptが変更になりました。