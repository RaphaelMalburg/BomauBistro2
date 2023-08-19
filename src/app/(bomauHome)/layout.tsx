import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Bomau Bistro",
  description: "Dive into the flavours of our asian cuisine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative bg-gradient-to-r from-primary-blue-50 via-primary-blue-100 to-primary-blue-100/70">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
