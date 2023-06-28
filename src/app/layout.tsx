import "./globals.css";

export const metadata = {
  title: "Choicyful",
  description: "Choicyful",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="px-24 py-10">{children}</body>
    </html>
  );
}
