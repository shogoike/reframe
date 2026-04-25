import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header solid />
      <main className="pt-24 md:pt-32 pb-24 md:pb-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}
