import type { Metadata } from "next";
import "./globals.css";
import "./styles/notoSansKR.css";
import Header from "./Layout/Header";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Let Me Know Seoul Festival",
  description: "정민우가 만들었습니다",
  icons: {
    icon: '/picnic.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <StoreProvider>
        <body className="w-screen overflow-x-hidden font-NotoSansKR bg-white dark:bg-black dark:text-white">
          <Header/>
            <main className="w-full">{children}</main> 
        </body>
      </StoreProvider>
    </html>
  );
}
