import { Hero } from "@/components";
import About from "@/components/About";
import Bar from "@/components/bar";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
    </main>
  );
}
