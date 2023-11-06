import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/layout/Hero";
import type { Metadata } from "next";

import About from "@/layout/About";
import Product from "@/layout/product";
import { useDispatch } from "@/hooks";
import { useEffect } from "react";
import {
  closeLoadingModal,
  openLoadingModal,
} from "@/redux/reducer/loadingModalReducer";
import Game from "@/layout/game";
import TutorSection from "@/layout/TutorSection";

export const metadata: Metadata = {
  title: "Olativity",
  description: "Olativity Official Website",
  icons: {
    icon: "/img/SC.png",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        {/* <Game /> */}
        <TutorSection />
      </main>
      <Footer />
    </>
  );
}
