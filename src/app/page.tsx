import Footers from "@/components/Footers";
import Hero from "@/components/Hero";
import Locators from "@/components/Locators";
import Navbar from "@/components/Navbar";
import Offerzone from "@/components/Offerzone";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Locators />
      <Offerzone />
      <Footers />
    </main>
  );
}
