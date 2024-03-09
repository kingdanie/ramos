import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "./component/footer";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramos",
  description: "We are a SaaS startup with a powerful digital analytics platform, offering advanced features like equity analysis tools, model development, and portfolio analysis. We give investors deep insights for confident decision-making",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
