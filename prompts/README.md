# RE:FRAME 画像生成プロンプト集

ChatGPT Image 2（gpt-image-1）に投げる前提のプロンプト集です。
日本語/英語混在、いずれもそのままコピペで使えます。

## 推奨レンダリング設定

- **Aspect ratio**: 用途に応じて以下を指定
  - OG画像: `1536x1024`（後で1200x630にトリミング）
  - ヒーロー背景: `1536x1024` もしくは `1792x1024`
  - サービス／実績カード: `1024x1024`（正方形）
  - チームポートレート: `1024x1536`（縦）
- **Style**: photorealistic / editorial / cinematic を意識
- **Color palette**: `#050505 (background)` × `#ff2e4c (accent red)` × `#ffd84d (yellow)` × `#45caff (cyan)` を共通トーンとして指定

## 配置先（生成後）

生成画像は `site/public/images/` 以下に配置してください：

```
site/public/images/
  og.png
  hero/hero-bg.jpg
  team/sato.jpg
  team/mokhtari.jpg
  services/tiktok.jpg
  services/sns.jpg
  services/web.jpg
  cases/kazuma-papa.jpg
  cases/bilingual-family.jpg
  cases/travel-japan.jpg
  cases/soccer-player.jpg
```

各セクションのコンポーネント側で `next/image` を使って読み込みます（プレースホルダの上から差し替え可能）。
