# 8月2週目

---

## supabaseが2024 **Launch Week を開催**

[Launch Week 12 | August 12-16 / 7am PT](https://supabase.com/launch-week)

BaaSのSupaBaseが毎年行っている新機能発表会を開催しました。
今年は8月12日から16日まで行われ、毎日新機能がLT形式で発表されています。

[Supabase Blog: Open Source Firebase alternative Blog](https://supabase.com/blog)

またLanuch Weekとしてsupabaseのブログでも、毎日記事が更新されていました。

### 調べたいこと

supabaseを個人開発で使用していたりするので、supabaseによるVSCodeのGithub Copilot拡張機能を使い、どう開発の体験が変わるかなどを調べてみたいと思いました。

---

## axiosのv1.7.4をリリース

https://github.com/axios/axios/releases/tag/v1.7.4

axiosがv1.7.4をリリースいたしました。

主にバグ修正のみとなり、サーバーサイドリクエスト時に発生する相対パスURLのリクエストが早退プロトコルURLとして処理される不具合で、**SSRF(Server Side Request Forgery)**が行われることが認められる現象に対するのが修正されました。

[NVD - CVE-2024-39338](https://nvd.nist.gov/vuln/detail/CVE-2024-39338)

### 感想

やばい不具合ぽいのが発生していることもあるので、ライブラリの不用意なアップデートは気をつけないといけないなと感じました。