import { Hero } from "@/components";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Vibe from "@/components/Vibe";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Vibe />
      <Carousel />
    </main>
  );
}
