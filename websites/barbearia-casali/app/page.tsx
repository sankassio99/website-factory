import { Header } from "@/components/Header";
import { About, Contact, Footer, Gallery, Hero, Marquee, Reviews, Services } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
