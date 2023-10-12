"use client";

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

export const metadata: Metadata = {
  title: "Olativity",
  description: "Generated by create next app",
  icons: {
    icon: "/img/SC.png",
  },
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openLoadingModal());
    setTimeout(() => {
      dispatch(closeLoadingModal());
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        <Game />
      </main>
      <Footer />
    </>
  );
}
