import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/layout/Hero";
import { useDispatch } from "@/hooks";
import { useEffect } from "react";
import {
  closeLoadingModal,
  openLoadingModal,
} from "@/redux/reducer/loadingModalReducer";
import type { Metadata } from "next";
import CountDownTimer from "@/layout/CountDown";
import About from "@/layout/About";
import Product from "@/layout/product";
import Game from "@/layout/game";
import TutorSection from "@/layout/TutorSection";
import SignIn from "@/components/Authentication/signin";
import signUp from "@/utils/firebase/auth/signup";
import { useAuthContext } from "@/utils/firebase/AuthContext";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Olativity",
  description: "Olativity Official Website",
  icons: {
    icon: "/img/SC.png",
  },
};

export default function Home() {
  // cara panggil modal
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(openLoadingModal());

  //   setTimeout(() => {
  //     dispatch(closeLoadingModal());
  //   }, 3000);
  // }, [dispatch]);

  // const currentDateTime = new Date();

  // // Define a custom date/time (e.g., December 1, 2023, at 12:00:00)
  // const customDateTime = new Date("2024-01-01T21:00:00");

  // // Calculate the time difference in milliseconds
  // const timeDifferenceMs = customDateTime.getTime() - currentDateTime.getTime();

  // // Convert milliseconds to days, hours, minutes, and seconds
  // const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
  // const hoursDifference = Math.floor(
  //   (timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  // );
  // const minutesDifference = Math.floor(
  //   (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
  // );
  // const secondsDifference = Math.floor((timeDifferenceMs % (1000 * 60)) / 1000);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Product />
        {/* <Game /> */}
        <TutorSection />
        {/* <CountDownTimer
          days={daysDifference}
          hours={hoursDifference}
          minutes={minutesDifference}
          seconds={secondsDifference}
        /> */}
        {/* <SignIn /> */}
      </main>
      <Footer />
    </>
  );
}
