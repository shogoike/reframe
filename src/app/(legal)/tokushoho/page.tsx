import type { Metadata } from "next";
import { LegalPage, Dl, Section } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "RE:FRAME（株式会社zumaica）の特定商取引法に基づく表記。",
};

export default function Tokushoho() {
  return (
    <LegalPage
      title="特定商取引法に基づく表記"
      subtitle="LEGAL NOTICE"
      updatedAt="2025年4月1日"
    >
      <Dl
        items={[
          { term: "販売事業者", desc: company.legalName },
          { term: "運営統括責任者", desc: company.representative },
          { term: "所在地", desc: company.address },
          {
            term: "電話番号",
            desc: "請求があり次第、遅滞なく開示いたします。",
          },
          { term: "メールアドレス", desc: company.email },
          {
            term: "サービス内容",
            desc:
              "TikTok等のSNSアカウント運用代行、SNSコンサルティング、ショート動画の企画・制作・編集、Web制作。",
          },
          {
            term: "販売価格",
            desc:
              "各サービスのページに記載しております。価格はすべて税抜き表示です。別途消費税が加算されます。",
          },
          {
            term: "商品代金以外の必要料金",
            desc:
              "初期費用（10万円・税抜）。撮影に伴う出張交通費、特殊機材費、有料素材費等が発生する場合は、見積時に別途ご案内いたします。インターネット接続料金、通信料等はお客様にてご負担ください。",
          },
          {
            term: "支払方法",
            desc:
              "銀行振込（前払い・月額払い）。詳細はご契約時にお伝えします。",
          },
          {
            term: "支払時期",
            desc:
              "ご契約後7日以内に初回お支払い。以降、毎月月末までに翌月分をお支払いいただきます。",
          },
          {
            term: "役務の提供時期",
            desc:
              "ご契約成立後、初回ヒアリングを経て、合意した日程に従い順次提供いたします。撮影・編集・投稿のスケジュールはお客様と協議の上で決定します。",
          },
          {
            term: "返品・キャンセル",
            desc:
              "サービスの性質上、ご契約成立後の返金・キャンセルは原則としてお受けしておりません。ただし、当社の責めに帰すべき事由により役務の提供ができない場合はこの限りではありません。詳細は利用規約および個別の契約書面によるものとします。",
          },
        ]}
      />

      <Section title="動作環境について">
        <p>
          納品物（動画ファイル等）の閲覧・利用にあたっては、最新のWebブラウザおよび一般的な動画再生環境をご用意ください。SNSプラットフォーム上での仕様変更により、表示・配信に影響が出る場合があります。
        </p>
      </Section>
    </LegalPage>
  );
}
