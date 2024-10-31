# 6月4週目

---

## Vite.jsがユーザーアンケート

https://x.com/vite_js/status/1805179653839274057

Vite.jsがJS環境を使用しているユーザーの状況をリサーチし、今後の状況の優先度などを決めるためにユーザーアンケートを実施

[Vite user survey](https://docs.google.com/forms/d/e/1FAIpQLSe_uruW4Jjbjs2JJbPdIxLmKDjGvTQRPD9Vi_WHuw96zH-EEQ/viewform?usp=send_form)

---

## RspackがTanStack Routerをサポート

https://x.com/rspack_dev/status/1805131919182729522

Rustで書かれたJavaScriptバンドラーのRspackが、TansTack Routerをサポートしました。

**TanStack Routerとは**

TanStack RouterとはTanStack Queryをリリースしているチームが開発したReact環境向けにルーティングライブラリの一つ。
特徴としてはTypeScript環境を前提としたType Safeな点を特徴としている。

---

## **Microsoft Defenderにて、ファイルに一定の文字列があると誤検知されてしまう問題**

[Microsoft Defender flags text file containing ‘This content is no longer available.’ as a severe threat](https://www.tomshardware.com/software/antivirus/microsoft-defender-flags-text-file-containing-this-content-is-no-longer-available-as-a-severe-threat)

Windows環境下でDefenderを使用している状態にて、ファイルに「**This content is no longer available.」**が記載されていると、トロイの木馬ファイルとフラグがつけられシステム上から自動的に削除されてしまう問題が発生。

Xのユーザーによると、SHA-256の衝突。ハッシュ値が値が衝突し有害な情報と無害な情報が同じハッシュ値となるため発生した問題と思われる。
ハッシュ値が衝突するのを大きなサービスで見れるのはかなり珍しいかもしれない。

[ハッシュ値が衝突する確率について](https://zenn.dev/firedial/articles/b4ec2380f41c6c)

---

## PrettierのOSSプロジェクトが資金不足

https://x.com/Vjeux/status/1805613003590746324

フロントエンドでは基本環境と言っていいPrettierのOSSプロジェクトが、資金不足でプロジェクトのメンテナンスで雇っているエンジニアへの報酬を払えなくなるかもしれないと公表。

2人のエンジニアに1500ドル/月を払っているため、数ヶ月後には資金が枯渇するかもしれないので、使用している企業やエンジニアで余裕のある人は寄付を呼びかけている。

---

## Figmaが**Config 2024で新機能を発表**

[Figma最新情報](https://www.figma.com/ja-jp/whats-new/)

Figmaは開催しているデザインカンファレンスのConfigにて、新機能を発表。
今年は生成AIがかなりブームなこともあり、メイン機能としてTOPにAI機能を発表している。
AI機能はベータ期間中は無料で触ることができるが、正式リリースが行われると有料になるとのこと。

他には**Figma Slides**などで、Figmaを使いプレゼンテーションができる機能も発表されている。