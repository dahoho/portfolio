# hodii.dev ポートフォリオサイト

このプロジェクトは[Next.js](https://nextjs.org) 15とReact 19をベースにした個人ポートフォリオサイトです。ブログ記事、メモ、読書メモ、Zenn記事などのコンテンツを管理・表示するための機能を備えています。

## 使用技術

- Next.js 15.1.3
- React 19.0.0
- TypeScript
- Tailwind CSS
- Mantine UI
- [Newt](https://www.newt.so/) (ヘッドレスCMS)
- Storybook
- Vitest

## 機能

- ブログ記事、メモ、読書メモの表示・管理
- Zenn記事の連携表示
- ダークモード対応
- レスポンシブデザイン
- Google Analytics連携
- OGP画像生成
- 記事のシェア機能

## コンテンツ構造

プロジェクトは以下のコンテンツタイプで構成されています：

- **ブログ記事** (`/blog`)：技術的な記事やその他のブログ記事
- **読書メモ** (`/readingMemo`)：読書の記録と感想
- **Zenn記事** (`/zenn`)：Zennプラットフォームからの記事

## 開発を始める

開発サーバーを起動するには:

```bash
# パッケージのインストール
yarn

# 開発サーバーの起動
yarn dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くとサイトを確認できます。

## スクリプト

```bash
# 開発サーバーの起動
yarn dev

# プロダクションビルド
yarn build

# プロダクションサーバーの起動
yarn start

# リンターの実行
yarn lint

# テストの実行
yarn test

# Storybookの起動
yarn storybook

# Storybookのビルド
yarn build-storybook
```

## コード構成

プロジェクトは以下のような構成になっています：

- `src/app/`: Next.jsのApp Routerによるルート定義
- `src/components/`: 再利用可能なReactコンポーネント
- `src/lib/`: Newt CMSなどの外部サービスとの連携コード
- `src/utils/`: ユーティリティ関数
- `src/types/`: TypeScript型定義
- `src/hooks/`: カスタムReactフック
- `src/styles/`: グローバルスタイル定義

## フォント

このプロジェクトでは [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) を使用して [Geist](https://vercel.com/font) フォントを最適化して読み込んでいます。

## テスト

Vitestを使用してユーティリティ関数のユニットテストを実装しています。テストは `yarn test` コマンドで実行できます。
