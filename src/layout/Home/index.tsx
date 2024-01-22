"use client";

import React, { useEffect } from "react";
import Hero from "../Hero";
import About from "../About";
import Product from "../product";
import TutorSection from "../TutorSection";

function HomePage() {
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
