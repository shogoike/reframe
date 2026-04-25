import type { Metadata } from "next";
import { LegalPage, Dl, Section } from "@/components/LegalPage";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社zumaica（RE:FRAME運営会社）の会社概要。",
};

export default function Company() {
  return (
    <LegalPage
      title="会社概要"
      subtitle="COMPANY"
      updatedAt="2025年4月1日"
    >
      <Section title="会社情報">
        <Dl
          items={[
            { term: "会社名", desc: `${company.legalName}（${company.legalNameEn}）` },
            { term: "設立", desc: company.founded },
            { term: "代表取締役", desc: `${company.representative}（${company.representativeEn}）` },
            { term: "所在地", desc: company.address },
            { term: "事業内容", desc: company.business.join(" / ") },
            { term: "メール", desc: company.email },
          ]}
        />
      </Section>

      <Section title="ミッション">
        <p>
          私たちは、SNSを単なる発信チャネルではなく、ブランドの本質を未来へつなぐ「資産」として捉えています。
          企業が本来持つ魅力を見つけ、磨き、届ける。RE:FRAMEは、その営みを伴走するパートナーです。
        </p>
      </Section>

      <Section title="提供価値">
        <p>
          企画・台本・撮影・編集・投稿・分析改善まで、SNS運用に必要なすべてのプロセスを内製で完結させ、
          スピードと品質を両立した運用をお届けします。広告に頼らず、コンテンツの力でファンを生み、
          売上・採用・ブランディングのすべてを底上げする運用を志向しています。
        </p>
      </Section>

      <Section title="アクセス">
        <p>
          {company.address}
          <br />
          ※ ご来訪の際は事前にご連絡ください。
        </p>
      </Section>
    </LegalPage>
  );
}
