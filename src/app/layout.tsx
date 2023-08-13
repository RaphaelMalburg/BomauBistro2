import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-r from-primary-blue-275 via-primary-blue-225 to-primary-blue-200">
        <NavBar />
        {children}
        {/*
        <Footer />*/}
      </body>
    </html>
  );
}
