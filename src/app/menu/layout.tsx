export const metadata = {
  title: "Menu",
  description: "Bomau Bistro Menu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <section className="  w-full h-full bg-white">{children}</section>;
}
