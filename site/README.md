# RE:FRAME — Corporate Site (仮)

株式会社zumaicaが提供する戦略型SNS運用代行ブランド「RE:FRAME」のコーポレートサイト（仮版）。

## Stack

- **Next.js 16.2.4** (App Router) + TypeScript
- **Tailwind CSS v4** （PostCSS プラグイン経由）
- **Framer Motion** — スクロール／ホバーアニメーション
- **lucide-react** — アイコン
- **next/font** — Geist / Noto Sans JP / Anton

## Project structure

```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # フォント・メタデータ
│   │   ├── page.tsx         # ホーム（全セクション組み立て）
│   │   └── globals.css      # デザイントークン・グローバル
│   ├── components/
│   │   ├── Header.tsx       # 固定ヘッダ + モバイルメニュー
│   │   ├── Hero.tsx         # ファーストビュー
│   │   ├── Marquee.tsx      # 流れるテキスト帯
│   │   ├── About.tsx        # 会社概要
│   │   ├── Services.tsx     # 事業内容（3カード）
│   │   ├── WhyUs.tsx        # 選ばれる理由（PLAN/SPEED/SUPPORT）
│   │   ├── Process.tsx      # ご契約までの流れ
│   │   ├── Plans.tsx        # 料金プラン
│   │   ├── Cases.tsx        # 実績紹介
│   │   ├── Team.tsx         # メンバー紹介
│   │   ├── FAQ.tsx          # よくある質問（アコーディオン）
│   │   ├── Contact.tsx      # CTA
│   │   └── Footer.tsx
│   └── lib/
│       └── data.ts          # 全セクションのコピー・データ
└── public/                  # ロゴ・画像置き場
```

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

最短手順：

1. **GitHubに push**
   ```bash
   cd /c/workspace/reframe/site
   git init
   git add .
   git commit -m "feat: initial RE:FRAME corporate site"
   gh repo create reframe-site --private --source . --push
   ```

2. **Vercelに import**
   - https://vercel.com/new からGitHubリポジトリを選択
   - Frameworkは自動検出（Next.js）
   - そのまま Deploy

3. **独自ドメインを接続（任意）**
   - Vercelプロジェクト > Settings > Domains に `reframe.zumaica.com` 等を追加
   - DNS（CNAME）を `cname.vercel-dns.com` に向ける

### Vercel CLI を使う場合

```bash
npm i -g vercel
vercel        # 初回はリンクのみ
vercel --prod # 本番デプロイ
```

## Editing content

ほぼ全てのテキスト・データは `src/lib/data.ts` に集約されています。
コピーや料金、FAQ、実績などはここを編集すれば各セクションに反映されます。

## Theming

- グローバル変数（色・フォント）は `src/app/globals.css` の `:root` で定義
- 主要トークン:
  - `--accent` (`#ff2e4c` / メインの赤)
  - `--accent-2` (`#ffd84d` / イエロー)
  - `--accent-3` (`#45caff` / シアン)

## Images

実際の画像は未配置です。`../prompts/` に ChatGPT Image 2 用のプロンプトを用意しているので、生成後に `public/images/` 以下に配置してください。配置パスは `prompts/README.md` 参照。

## TODO（仮版から本番へ）

- [ ] OG画像 (`public/images/og.png`) 生成・配置 → `layout.tsx` の `metadata.openGraph.images` に追加
- [ ] Hero / Services / Team / Cases の各画像差し替え
- [ ] お問い合わせフォーム実装（現状は mailto: のみ）
- [ ] プライバシーポリシー / 特商法ページ
- [ ] Google Analytics / GTM 計測
- [ ] sitemap.xml / robots.txt
