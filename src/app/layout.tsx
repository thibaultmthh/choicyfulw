
import { Inter } from "next/font/google";

export const metadata = {
  title: "Choicyful",
  description: "Choicyful",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="px-7 py-5">{children}</body>
    </html>
  );
}
