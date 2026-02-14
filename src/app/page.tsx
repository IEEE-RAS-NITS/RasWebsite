import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconCards from "@/components/IconCards";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <IconCards />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
