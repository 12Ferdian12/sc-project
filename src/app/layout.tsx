"use client";

import { store } from "@/redux/store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import LoadingModal from "@/components/loadingModal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thin scrollbar-thumb-Yellow scrollbar-track-Brown2 "
    >
      <Provider store={store}>
        <body className={inter.className}>
          <LoadingModal />
          {children}
        </body>
      </Provider>
    </html>
  );
}
