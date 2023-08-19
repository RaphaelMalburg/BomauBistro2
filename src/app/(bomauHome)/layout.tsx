import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Bomau Bistro",
  description: "Dive into the flavours of our asian cuisine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative bg-gradient-to-r from-primary-blue-275 via-primary-blue-225 to-primary-blue-200">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
