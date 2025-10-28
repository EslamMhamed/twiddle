import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twiddle",
  description:
    "A social media app , to discover what is happing now in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main className={`${inter.className} bg-dark-1`}>
            <div className="flex items-center justify-center w-full min-h-screen">
              {children}
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
