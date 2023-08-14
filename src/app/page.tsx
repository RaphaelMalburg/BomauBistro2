import { Hero } from "@/components";
import About from "@/components/About";
import Vibe from "@/components/Vibe";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Vibe />
    </main>
  );
}
