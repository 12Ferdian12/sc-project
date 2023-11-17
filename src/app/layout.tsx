"use client";

import { store } from "@/redux/store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, League_Spartan, Poppins } from "next/font/google";
import { Provider } from "react-redux";
import LoadingModal from "@/components/loadingModal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AuthContextProvider } from "@/utils/firebase/AuthContext";

const inter = Inter({ subsets: ["latin"] });
export const leagueSpartan = League_Spartan({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thin scrollbar-thumb-Yellow scrollbar-track-Brown2 "
    >
      <Provider store={store}>
        <body>
          <AuthContextProvider>
            <LoadingModal />
            {children}
          </AuthContextProvider>
        </body>
      </Provider>
    </html>
  );
}
