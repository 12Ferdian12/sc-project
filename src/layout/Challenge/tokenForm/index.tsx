"use client";
import React, { useState, useEffect } from "react";
import { getTokenByCode } from "../../../api/token";

function TokenForm({
  setIsTokenCorrect,
}: {
  setIsTokenCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [inputToken, setInputToken] = useState("");
  const [error, setError] = useState("");

  const handleButtonCheckToken = async () => {
    try {
      const checkToken = await getTokenByCode(inputToken);
      if (checkToken) {
        setIsTokenCorrect(true);
      } else {
        setError("Token is incorrect");
      }
    } catch (error) {
      setError("Token is incorrect");
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Enter Token</h1>
      <input
        className="text-black rounded-md px-4 py-2"
        type="text"
        value={inputToken}
        onChange={(e) => setInputToken(e.target.value)}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => {
          handleButtonCheckToken();
        }}
      >
        Submit
      </button>
      <p className="text-red-500">{error}</p>
    </div>
  );
}

export default TokenForm;
