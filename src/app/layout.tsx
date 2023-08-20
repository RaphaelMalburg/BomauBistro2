import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Bomau Bistro",
  description: "Dive into the flavours of our asian cuisine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-r from-primary-blue-200/80 via-primary-blue-100/30 to-primary-blue-200/70">{children}</body>
    </html>
  );
}
