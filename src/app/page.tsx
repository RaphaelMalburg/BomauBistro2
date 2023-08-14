import { Hero } from "@/components";
import About from "@/components/About";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
    </main>
  );
}
