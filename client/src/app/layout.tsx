import Header from "@/components/layout/header";
import "./globals.scss";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} m-32`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
