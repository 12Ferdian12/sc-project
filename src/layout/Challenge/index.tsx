"use client";
import React, { useState, useEffect } from "react";
import { openModal } from "@/redux/reducer/ModalReducer";
import { useDispatch } from "@/hooks";
import "./style.css";
import TokenForm from "./tokenForm";
import SpinningWheelForm from "./spinningWheelForm";
import { getAllQuestion } from "@/api/question";

interface QuestionModel {
  id: string;
  Question: string;
  AnswerOpt: Choice[];
}

interface Choice {
  AnswerText: string;
  isCorrect: boolean;
}

function ChallengePage() {
  const [isTokenCorrect, setIsTokenCorrect] = useState(false);
  // const questions = [
  //   {
  //     questionText: "What is the capital of France?",
  //     answerOptions: [
  //       { answerText: "New York", isCorrect: false },
  //       { answerText: "London", isCorrect: false },
  //       { answerText: "Paris", isCorrect: true },
  //       { answerText: "Dublin", isCorrect: false },
  //     ],
  //   },
  //   // {
  //   //   questionText: "Who is CEO of Tesla?",
  //   //   answerOptions: [
  //   //     { answerText: "Jeff Bezos", isCorrect: false },
  //   //     { answerText: "Elon Musk", isCorrect: true },
  //   //     { answerText: "Bill Gates", isCorrect: false },
  //   //     { answerText: "Tony Stark", isCorrect: false },
  //   //   ],
  //   // },
  //   // {
  //   //   questionText: "The iPhone was created by which company?",
  //   //   answerOptions: [
  //   //     { answerText: "Apple", isCorrect: true },
  //   //     { answerText: "Intel", isCorrect: false },
  //   //     { answerText: "Amazon", isCorrect: false },
  //   //     { answerText: "Microsoft", isCorrect: false },
  //   //   ],
  //   // },
  //   // {
  //   //   questionText: "How many Harry Potter books are there?",
  //   //   answerOptions: [
  //   //     { answerText: "1", isCorrect: false },
  //   //     { answerText: "4", isCorrect: false },
  //   //     { answerText: "6", isCorrect: false },
  //   //     { answerText: "7", isCorrect: true },
  //   //   ],
  //   // },
  // ];

  const [questions, setQuestions] = useState<QuestionModel[]>([]);

  const fetchQuestions = async () => {
    try {
      const questions = await getAllQuestion();
      setQuestions(questions);
    } catch (error) {
      console.error("Failed to fetch questions", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (score > 0) {
    return <SpinningWheelForm />;
  }

  return (
    <section className="flex bg-gradient-to-b from-slate-700/50 to-Coklat min-h-[100vh]  md:min-h-[60vh] bg-opacity-50 bg-cover lg:min-h-[100vh]">
      <div className="app bg-BB mx-auto my-auto border-4 border-Yellow text-white">
        {!isTokenCorrect ? (
          <TokenForm setIsTokenCorrect={setIsTokenCorrect} />
        ) : showScore ? (
          <div className="flex-row mx-auto my-auto  ">
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>

            <button className="mt-5">Spin</button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].Question}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].AnswerOpt.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.AnswerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ChallengePage;
