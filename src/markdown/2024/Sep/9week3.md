---

## TanStack Start SDK(Beta)

[TanStack Start](https://tanstack.com/start/latest)

[Clerk on Twitter / X](https://x.com/ClerkDev/status/1836104829090808310)

TanStack Queryなどを提供するTanStackが新しくTanStack Startというプロダクトを立ち上げました。
これは、viteやVinxiなどのJS環境で動くReactフレームワークの一つです。
ステータスとしてはまだアルファであるため、本番環境での使用には適さないですが、Remixなどと同じくReactフレームワークの選択肢の一つになるかもしれません。

---

## Amazon 商品サムネの切り替えが行われなくなっていた

https://x.com/kameneko1004/status/1835618717197094975

Amazonの商品サムネがクリックしても切り替わらないと言った不具合があったようです。
私は確認できませんので、すぐに修正されたかもしれません。
発生原因はアクセシビリティの使い方のミスのようで、ブラウザ側がブロックしたようです。
というか、Amazonでもこういうミスがあるので、自分のミ🤔スがあっても落ち込むまではないような気がしました

---

---

## ts-blank-space をリリース

[ts-blank-space](https://bloomberg.github.io/ts-blank-space/)

TypeScriptをJavaScriptへ変換するための高速な型除去コンパイラがリリースされました。
他のよりも技術の恩恵によりビルドパフォーマンスが向上していますが、逆にすべてのTypeScript構文をサポートしているわけではないとしているので、使えない部分もあるとしています。