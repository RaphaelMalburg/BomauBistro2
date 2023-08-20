import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Bomau Bistro",
  description: "Dive into the flavours of our asian cuisine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-full">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
