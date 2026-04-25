# RE:FRAME

株式会社zumaicaが提供する戦略型SNS運用代行ブランド「RE:FRAME」のコーポレートサイト（仮版）。

## Structure

```
.
├── site/        # Next.js 16 アプリ本体（デプロイ対象）
└── prompts/     # ChatGPT Image 2 用 画像生成プロンプト集
```

## Quick start

```bash
cd site
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. このリポジトリを Vercel に import
2. **Root Directory を `site` に設定**
3. Framework は自動検出（Next.js）→ Deploy

詳細は [`site/README.md`](./site/README.md) を参照。
