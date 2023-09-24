import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/layout/Hero";
import Head from "next/head";
import About from "@/layout/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olatifity</title>
        <link rel="icon" href="/img/SC.png" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
