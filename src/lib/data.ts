// Site content (centralized so copy can be tweaked easily)
// All claims here cross-checked against REFRAME資料.pdf to avoid unsupported assertions.

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
  eyebrow: "TikTok・SNS運用パートナー",
  titleA: "視点を、",
  titleB: "リフレーム。",
  subtitle:
    "TikTokを起点に、採用・集客・認知を\n事業成果につながる資産へ。",
  supplement:
    "SNS戦略設計から動画制作まで、企画から分析改善まで一気通貫で支援。",
  ctaPrimary: { label: "無料でSNS課題を相談する", href: "#contact" },
  ctaSecondary: { label: "支援実績を見る", href: "#cases" },
  assurance: [
    "相談無料",
    "オンライン対応（Zoom／LINE）",
    "強引な営業はいたしません",
  ],
  stats: [
    {
      value: "49,000+",
      unit: "人",
      label: "総フォロワー",
      sub: "自社公式アカウント合算",
    },
    {
      value: "1億円+",
      unit: "",
      label: "運用代行 売上総額",
      sub: "RE:FRAME事業 累計",
    },
    {
      value: "1,000+",
      unit: "本",
      label: "ショート動画 制作実績",
      sub: "クリエイティブ・ディレクション含む",
    },
    {
      value: "10社+",
      unit: "",
      label: "グループ支援企業数",
      sub: "継続支援を含む",
    },
  ],
  statsCaveat: "※ 自社運用および支援先の累計実績（2024年時点）",
};

export const services = [
  {
    no: "01",
    title: "SNS戦略設計・運用代行",
    titleEn: "STRATEGY",
    description:
      "事業ゴールから逆算したアカウント設計と、企画から分析改善までの運用代行を一気通貫で。TikTokを中心に、ブランドに沿った継続的な運用を実現します。",
    features: [
      "アカウント設計 / KPI設計",
      "企画構成・台本制作",
      "投稿運用・月次レポート",
      "アルゴリズム分析・改善提案",
    ],
  },
  {
    no: "02",
    title: "ショート動画制作",
    titleEn: "CREATIVE",
    description:
      "TikTok・Reels・Shortsで「見られる」前提のクリエイティブ制作。1動画20分以内の撮影体制で、量と質のバランスを最適化します。",
    features: [
      "撮影ディレクション・編集",
      "肩書き／プロフィール／世界観設計",
      "毎月の継続的な動画制作",
      "トレンド対応・カット設計",
    ],
  },
  {
    no: "03",
    title: "Web制作・導線設計",
    titleEn: "PRODUCTION",
    description:
      "SNSで生まれた接点を、確実な成果につなげるためのWebサイト・LP制作。ブランドの世界観をオフ・オンライン一気通貫で設計します。",
    features: [
      "コーポレートサイト／LP制作",
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
    diff: "他社との違い：再生数だけを追わず、本質的な魅力を起点に運用設計します。",
  },
  {
    label: "SPEED",
    title: "圧倒的なスピード感",
    body: "撮影から投稿までを高速で回し、アルゴリズムに評価されやすい運用を実現。1動画20分以内の撮影で、量と質のバランスを最適化します。",
    diff: "他社との違い：「ドラマ風で本数を絞る」ではなく、量と質を両立します。",
  },
  {
    label: "SUPPORT",
    title: "継続的な伴走サポート",
    body: "クライアントの声を反映し、毎月の戦略MTGと分析チームで継続改善。目的達成までKPIに向き合い、伴走し続けます。",
    diff: "他社との違い：契約期間の終了ではなく、目的達成までを基準に動きます。",
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

export const plansLead =
  "事業フェーズや目的に合わせて、必要な施策のみを組み合わせてご提案します。下記は標準プランの目安で、ヒアリング後に内容を調整可能です。";

export const plans = [
  {
    name: "ライトプラン",
    nameEn: "LIGHT",
    subtitle: "まずはTikTokを始めたい方へ",
    target: "これからSNSを本格化したい企業",
    price: "198,000",
    unit: "円 / 月〜",
    note: "※ 月3社限定 / 初期費用 10万円",
    contract: "3ヶ月契約〜",
    features: [
      "企画・台本・撮影・編集・投稿 各4本／月",
      "肩書き／プロフィール／全体設計",
      "自撮り形式の撮影支援",
      "簡易フィードバック",
    ],
    highlight: false,
  },
  {
    name: "スタンダードプラン",
    nameEn: "STANDARD",
    subtitle: "運用と改善を任せたい方へ",
    target: "SNSを事業の柱に育てたい企業",
    price: "300,000",
    unit: "円 / 月〜",
    note: "※ おすすめ / 初期費用 10万円",
    contract: "6ヶ月契約〜",
    features: [
      "企画・台本・撮影・編集・投稿 各8本／月（週2投稿）",
      "完全オリジナル企画＋ブランド特化",
      "月1回 戦略MTG・改善提案",
      "TikTok広告運用（オプション）",
    ],
    highlight: true,
  },
  {
    name: "プレミアムプラン",
    nameEn: "PREMIUM",
    subtitle: "SNSを事業導線の中心にしたい方へ",
    target: "採用・集客でSNSを主軸にする企業",
    price: "500,000",
    unit: "円 / 月〜",
    note: "※ 初期費用 10万円 / 年間契約で月35万円〜",
    contract: "6ヶ月契約〜",
    features: [
      "企画・台本・撮影・編集・投稿 各12本／月（週3投稿）",
      "撮影ディレクション・エフェクト編集",
      "マネージャー＋分析チーム配属",
      "TikTok広告運用＋詳細レポート",
    ],
    highlight: false,
  },
];

export const plansFooterNote =
  "※ 上記以外のカスタムプランもご相談可能です。初回ヒアリングは無料です。価格はすべて税抜き表示で、別途消費税が加算されます。";

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
  photo?: string;
  instagram?: string;
};

export const team: TeamMember[] = [
  {
    name: "佐藤 和馬",
    nameEn: "Sato Kazuma",
    role: "代表取締役 / Founder & CEO",
    bio: "株式会社zumaica 代表。総フォロワー4万9,000人超、2024年SNSマーケティング売上4,500万円を達成。インバウンド・スポーツ・英語アカウントなど多領域で実績を持つ。",
    photo: "/images/team/sato.jpg",
    instagram: "https://www.instagram.com/kazumaica/",
  },
  {
    name: "モクタリ 未来斗",
    nameEn: "Mokhtari Milad",
    role: "映像制作責任者 / Creative Director",
    bio: "SNS運用の総フォロワー17万人以上、ショート動画制作1,000本超。京都外国語大学卒業、英語アカウントの翻訳も担当し、想いを動画に落とし込む。",
    photo: "/images/team/mokhtari.jpg",
    instagram: "https://www.instagram.com/mi1a_p6liw/",
  },
];

export const faqs = [
  {
    q: "TikTokを始めたことがなくても依頼できますか？",
    a: "はい、ゼロからのご相談が最も多くいただくケースです。アカウント開設・戦略設計・運用までトータルでサポートします。",
  },
  {
    q: "撮影は全国対応していますか？",
    a: "はい、出張撮影も全国対応しています。スケジュールやエリアに応じて柔軟にご相談ください。",
  },
  {
    q: "自社で撮影した素材も使えますか？",
    a: "はい、編集のみのプランもご用意しています。お持ちの素材を最大限に活用します。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "ライトプランは3ヶ月、スタンダード／プレミアムは6ヶ月からご契約いただけます。SNSは成果が出るまで一定期間が必要なため、無理なく継続できる形をご提案します。",
  },
  {
    q: "月額以外に追加費用はかかりますか？",
    a: "別途、初期費用 10万円が発生します。出張交通費、特殊機材費、有料素材費等が必要な場合はお見積時に明示しますので、予算外の請求が発生することはありません。",
  },
  {
    q: "社内にSNS担当者がいなくても大丈夫ですか？",
    a: "はい、月1回の窓口担当者（1名）とのMTGがあれば、それ以外の運用は弊社で完結します。",
  },
  {
    q: "成果が出るまでどのくらいかかりますか？",
    a: "1〜3ヶ月目は土台構築期間、4〜6ヶ月目で成果が見え始め、7ヶ月目以降にKPI達成を狙います（月8〜18本投稿の場合）。初月から成果を保証する代理店にはご注意ください。",
  },
  {
    q: "地方企業でも対応できますか？",
    a: "全国対応しています。打ち合わせはZoom／LINEなどオンラインで、撮影は出張対応または地方撮影パートナーと連携いたします。",
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
