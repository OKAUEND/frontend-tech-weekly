## Storybook Test sneak peek の発表
https://storybook.js.org/blog/storybook-test-sneak-peek/

フロントエンドテストでよく使われるテスト系のツールの一つが新しい機能の先行体験版の募集を開始しました。
Storybook + Vitest の環境で、なおかつVitestと[ポータブルストーリー](https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest?ref=storybookblog.ghost.io)機能を利用し、
自動的にStorybookがVitestのテストへ変換をし、Storybookのブラウザ上でコンポーネントテストを行うようです。
機能として提供されるのは
- コンポーネントテスト
- 視覚テスト
- アクセシビリティテスト
この3つのようです。
現在はまだ正式版ではなく、早期アクセスプログラムの参加を募集している状態です。
**感想**
Vitest Browser Modeもそうですが、来年はテスト環境が一新されそうなほど新しい仕組みが表に出てきているなと感じました。
Jest環境からは脱するときがきたかもしれません。

--
## StoryBook がNext.js 15の対応を始める
https://github.com/storybookjs/storybook/issues/29421
Next.js 15がリリースされましたが、StorybookでもNext.js 15への対応を始めました。
有志によりアップグレード作業が始まっています。

