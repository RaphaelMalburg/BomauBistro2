import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Bomau Bistro",
  description: "Dive into the flavours of our asian cuisine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
