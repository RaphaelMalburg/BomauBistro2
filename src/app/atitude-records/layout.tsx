export const metadata = {
  title: "Atitude Records",
  description: "A new way to listen to music",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section className="  w-full h-full">{children}</section>;
}
