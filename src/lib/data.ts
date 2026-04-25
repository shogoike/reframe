// Site content (centralized so copy can be tweaked easily)

export const company = {
  brand: "RE:FRAME",
  legalName: "株式会社zumaica",
  legalNameEn: "ZUMAICA Inc.",
  founded: "2019年",
  representative: "佐藤 和馬",
  representativeEn: "Sato Kazuma",
  address: "大阪府富田林市小金台4丁目13番14号",
  email: "k.sato@zumaica.com",
  business: ["SNS運用事業", "SNSコンサルティング", "Web制作事業"],
  socials: {
    instagram: "https://www.instagram.com/kazumaica/",
  },
};

export const heroCopy = {
  eyebrow: "STRATEGIC SNS PARTNER",
  titleA: "視点を、",
  titleB: "リフレーム。",
  subtitle:
    "TikTokを起点に、御社の眠る原石を発掘し、未来に残る資産として動画で発信する。",
  ctaPrimary: { label: "無料オンライン相談", href: "#contact" },
  ctaSecondary: { label: "サービスを見る", href: "#services" },
  stats: [
    { value: "49,000+", label: "総フォロワー" },
    { value: "1億円+", label: "運用代行売上" },
    { value: "1,000+", label: "ショート動画制作" },
    { value: "10社+", label: "支援実績" },
  ],
};

export const services = [
  {
    no: "01",
    title: "TikTok運用代行",
    titleEn: "TIKTOK MANAGEMENT",
    description:
      "企画・台本・撮影・編集・投稿・分析改善まで一気通貫。アルゴリズムを攻略し、ブランドを伝えながら確実に集客・採用へつなげます。",
    features: [
      "戦略設計／アカウント全体設計",
      "撮影ディレクション・編集",
      "毎月のレポート・改善MTG",
    ],
  },
  {
    no: "02",
    title: "SNSコンサルティング",
    titleEn: "SNS CONSULTING",
    description:
      "Instagram / X / YouTube などマルチプラットフォームに対応。御社のフェーズと目的に合わせた最短ルートを設計します。",
    features: [
      "ターゲット設定・導線設計",
      "競合リサーチ・ポジショニング",
      "KPI設計とPDCA運用",
    ],
  },
  {
    no: "03",
    title: "Web制作",
    titleEn: "WEB PRODUCTION",
    description:
      "SNSで生まれた接点を、確実な成果につなげるためのWebサイト・LP制作。ブランドの世界観を一気通貫で設計します。",
    features: [
      "コーポレートサイト／LP",
      "ブランディング・デザイン",
      "公開後の運用伴走",
    ],
  },
];

export const whyUs = [
  {
    label: "PLAN",
    title: "光る原石を見つける企画力",
    body: "どんな企業にも眠る「SNS映えする魅力」を発掘し、最大化。トレンドとブランドを掛け合わせた完全オリジナル企画で、本質から差をつくります。",
  },
  {
    label: "SPEED",
    title: "圧倒的なスピード感",
    body: "撮影から投稿までを高速で回し、アルゴリズムに評価されやすい運用を実現。1動画20分以内の撮影で、量と質のバランスを最適化します。",
  },
  {
    label: "SUPPORT",
    title: "継続的な伴走サポート",
    body: "クライアントの声を反映し、毎月の戦略MTGと分析チームで継続改善。目的達成までKPIに向き合い、伴走し続けます。",
  },
];

export const process = [
  {
    step: "01",
    title: "ヒアリング",
    body: "SNS運用や動画活用の目的・課題を徹底的にヒアリング。初期設定で勝負が決まります。",
  },
  {
    step: "02",
    title: "企画・戦略提案",
    body: "御社に合わせたカスタムプランをご提案。アカウント設計から導線まで全体を設計します。",
  },
  {
    step: "03",
    title: "撮影・編集・投稿",
    body: "撮影日程の調整から納品・投稿まで丸投げOK。月1回〜の撮影で運用を継続します。",
  },
  {
    step: "04",
    title: "分析・改善",
    body: "毎月のレポートとMTGで改善提案を継続的に実施。目的達成まで徹底的にサポートします。",
  },
];

export const plans = [
  {
    name: "ライトプラン",
    nameEn: "LIGHT",
    price: "198,000",
    unit: "円 / 月",
    note: "※ 月3社限定 / 初期費用 10万円",
    contract: "3ヶ月契約〜",
    features: [
      "企画・台本・撮影・編集・投稿 各4本",
      "肩書き／プロフィール／全体設計",
      "自撮り形式の撮影支援",
      "簡易フィードバック",
    ],
    highlight: false,
  },
  {
    name: "スタンダードプラン",
    nameEn: "STANDARD",
    price: "300,000",
    unit: "円 / 月",
    note: "※ おすすめ / 初期費用 10万円",
    contract: "6ヶ月契約〜",
    features: [
      "企画・台本・撮影・編集・投稿 各8本（週2投稿）",
      "完全オリジナル企画＋ブランド特化",
      "月1回 戦略MTG・改善提案",
      "TikTok広告運用（オプション）",
    ],
    highlight: true,
  },
  {
    name: "プレミアムプラン",
    nameEn: "PREMIUM",
    price: "500,000",
    unit: "円 / 月",
    note: "※ 初期費用 10万円 / 年間契約で月35万円〜",
    contract: "6ヶ月契約〜",
    features: [
      "企画・台本・撮影・編集・投稿 各12本（週3投稿）",
      "撮影ディレクション・エフェクト編集",
      "マネージャー＋分析チーム配属",
      "TikTok広告運用＋詳細レポート",
    ],
    highlight: false,
  },
];

type CaseStudy = {
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
  body: string;
  instagram?: string;
};

export const cases: CaseStudy[] = [
  {
    tag: "代表アカウント",
    title: "かずまパパ",
    metric: "5,000",
    metricLabel: "リスト獲得",
    body: "ゼロから運用開始し、TikTok経由で5,000リストを獲得。集客チャネルを内製化しました。",
    instagram: "https://www.instagram.com/kazumaica/",
  },
  {
    tag: "バイリンガル家族",
    title: "佐藤 和馬",
    metric: "17,000",
    metricLabel: "フォロー獲得",
    body: "2,000フォロワーから17,000フォロワーへ。バイリンガル領域でブランドを確立しました。",
  },
  {
    tag: "観光・インバウンド",
    title: "TRAVEL JAPAN TOGETHER",
    metric: "155K",
    metricLabel: "フォロワー",
    body: "1.8万人 → 15.5万人。インバウンド向けアカウントを爆発的に成長させました。",
    instagram: "https://www.instagram.com/travel.japan_together/",
  },
  {
    tag: "個人ブランディング",
    title: "元プロサッカー選手",
    metric: "50万",
    metricLabel: "回再生 / 3投稿目",
    body: "プロセスエコノミー型でファンを獲得。仕事依頼40件超を実現しました。",
  },
];

type TeamMember = {
  name: string;
  nameEn: string;
  role: string;
  bio: string;
  instagram?: string;
};

export const team: TeamMember[] = [
  {
    name: "佐藤 和馬",
    nameEn: "Sato Kazuma",
    role: "代表取締役 / Founder & CEO",
    bio: "株式会社zumaica 代表。総フォロワー4万9,000人超、2024年SNSマーケティング売上4,500万円を達成。インバウンド・スポーツ・英語アカウントなど多領域で実績を持つ。",
    instagram: "https://www.instagram.com/kazumaica/",
  },
  {
    name: "モクタリ 未来斗",
    nameEn: "Mokhtari Milad",
    role: "映像制作責任者 / Creative Director",
    bio: "SNS運用の総フォロワー17万人以上、ショート動画制作1,000本超。京都外国語大学卒業、英語アカウントの翻訳も担当し、想いを動画に落とし込む。",
  },
];

export const faqs = [
  {
    q: "撮影は全国対応していますか？",
    a: "はい、出張撮影も全国対応しています。お気軽にご相談ください。",
  },
  {
    q: "自社で撮影した素材も使えますか？",
    a: "はい、編集のみのプランもご用意しています。お持ちの素材を最大限に活用します。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "最低3ヶ月からスタート可能です。まずは無料相談からお気軽にお問い合わせください。",
  },
  {
    q: "成果が出るまでどのくらいかかりますか？",
    a: "1〜3ヶ月目は土台構築期間、4〜6ヶ月目で成果が見え始め、7ヶ月目以降にKPI達成を狙います（月8〜18本投稿の場合）。",
  },
  {
    q: "他のSNS運用会社との違いは？",
    a: "PLAN（企画力）・SPEED（スピード感）・SUPPORT（伴走）の3軸で、量と質を両立する運用設計をしています。広告に頼らず資産化を目指す点も特徴です。",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Plans", href: "#plans" },
  { label: "Cases", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];
