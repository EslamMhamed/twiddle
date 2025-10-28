import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import TopBar from "@/components/shared/TopBar";
import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twiddle",
  description:
    "A social media app , to discover what is happing now in the world",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  if (!user) {
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

  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body>
            <main className={`${inter.className}`}>
              <TopBar />
              <main className="flex">
                <LeftSideBar />
                <section className="main-container">
                  <div className="w-full max-w-4xl">{children}</div>
                </section>
                <RightSideBar />
              </main>

              <BottomBar />
            </main>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
