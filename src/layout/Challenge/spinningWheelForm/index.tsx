"use client";
import React, { useEffect, useState } from "react";
import { getAllPrize } from "../../../api/prize";

import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

interface Prize {
  image: string;
  range: number;
  isAvailable: boolean;
}

const SpinningWheelForm = () => {
  const [prizes, setPrize] = useState<Prize[]>([]);

  function SpinNing() {
    let randomPrize = Math.floor(Math.random() * 1000000);
    let prizeIndex = 0;
    switch (true) {
      case randomPrize <= 5:
        prizeIndex = 0;
        if (prizes[0].isAvailable === false) {
          SpinNing();
        }
        break;
      case randomPrize > 5 && randomPrize <= 50:
        prizeIndex = 1;
        if (prizes[0].isAvailable === false) {
          SpinNing();
        }
        break;
      case randomPrize > 20 && randomPrize <= 50:
        prizeIndex = 2;
        if (prizes[0].isAvailable === false) {
          SpinNing();
        }
        break;
      case randomPrize > 50 && randomPrize <= 250:
        prizeIndex = 3;
        if (prizes[0].isAvailable === false) {
          SpinNing();
        }
        break;
      case randomPrize > 250 && randomPrize <= 1000:
        prizeIndex = 4;
        if (prizes[0].isAvailable === false) {
          SpinNing();
        }
        break;
      default:
        break;
    }
    console.log(randomPrize);
    return prizeIndex;
  }

  // Todo: Change this to the index of the prize you want to win
  const [winPrizeIndex, setWinPrizeIndex] = useState<number>(SpinNing());

  const reproductionArray = (
    array: { image: string }[] = [],
    length: number = 0
  ) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];
  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id:
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : generateId(),
  }));

  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log(winPrizeIndex);
    console.log("🥳 Prize defined! 🥳");
  };

  const fetchPrizes = async () => {
    try {
      const prizes = await getAllPrize();
      setPrize(prizes);
    } catch (error) {
      console.error("Failed to fetch prizes", error);
    }
  };

  useEffect(() => {
    fetchPrizes();
  }, []);

  return (
    <>
      <div className="mx-auto my-auto"></div>
      {prizeList.length > 0 && (
        <RoulettePro
          prizes={prizeList}
          prizeIndex={prizeIndex}
          start={start}
          onPrizeDefined={handlePrizeDefined}
        />
      )}
      <button onClick={handleStart}>Start</button>
    </>
  );
};

export default SpinningWheelForm;
