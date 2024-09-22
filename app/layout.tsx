import HeaderAuth from "@/components/header-auth";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { TypographyH1 } from "@/components/typography/TypographyH1";
import { Button } from "@/components/ui/button";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="max-w-screen-lg mx-auto p-4">
          <nav className="flex flex-row flex-wrap justify-between gap-2">
            <Link href={"/"}>
              <TypographyH1>Noticeboard</TypographyH1>
            </Link>
            <Button>Add Event</Button>
          </nav>
          <div className="flex flex-col gap-20 max-w-5xl py-5">{children}</div>
        </main>
      </body>
    </html>
  );
}
