"use client";

import React, { useEffect } from "react";
import Hero from "../Hero";
import About from "../About";
import Product from "../product";
import TutorSection from "../TutorSection";
import { openModal } from "@/redux/reducer/ModalReducer";
import { useDispatch } from "@/hooks";

function HomePage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(openModal("hello world"));
  // }, [dispatch]);

  return (
    <div>
      {" "}
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
    </div>
  );
}

export default HomePage;
