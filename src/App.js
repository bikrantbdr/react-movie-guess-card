import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";

function App() {
  const [flashcards] = useState(SAMPLE_FLASHCARDS);
  return <FlashcardList flashcards={flashcards} />;
}
document.addEventListener("dblclick", () => {
  document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
  });
});

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "☘️☘️☘️",
    answer: "Teenpatey",
  },
  {
    id: 2,
    question: "🌺💃",
    answer: "Fhul buttery saari",
  },
  {
    id: 4,
    question: "✈️✈️",
    answer: "Hawaijahaj",
  },
  {
    id: 5,
    question: "🤷🏼‍♀️👄👉",
    answer: "Kasari bhanau timilai",
  },
  // {
  //   id: 6,
  //   question: "👩‍👩‍👦‍👦 🇳🇵    ",
  //   answer: "Hamro Nepal ma",
  // },
  {
    id: 7,
    question: "🤭🤭😂🤭🤭😂",
    answer: "Musu musu hasideu",
  },
  {
    id: 8,
    question: "💌 📝📤",
    answer: "Chiti bhitra",
  },
  {
    id: 9,
    question: "💖❌",
    answer: "Pirim nalauney ",
  },
  {
    id: 10,
    question: "👉🤗🥰",
    answer: "Timro nyano angalo ko maya",
  },
  {
    id: 11,
    question: "😀🔨=😵\n\n🌜🌟👉",
    answer: "Behos / Juna Tara timro aghi",
  },
  {
    id: 12,
    question: "👉👀🏔️😂",
    answer: "Timilai dekhera himal haseko",
  },
  {
    id: 13,
    question: "💗🍃",
    answer: "Paan ko paat",
  },
  {
    id: 14,
    question: "🙋🏻‍♀️👄💬❌",
    answer: "Malai bhanna aaudaina",
  },
  {
    id: 15,
    question: "🐦⚰️🔫",
    answer: "Chaari maryo sisai ko goli ley",
  },
  // {
  //   id: 16,
  //   question: "😋👉😀",
  //   answer: "Mitho tmro muskanai ma",
  // },
  {
    id: 17,
    question: "🧣🏠",
    answer: "Nyano ghar",
  },
  {
    id: 18,
    question: "👉⛰️👀☀️",
    answer: "Paari tyo dada ma Hera",
  },

  {
    id: 101,
    question: " GameMaster",
    answer: "Pratima Dawadi",
  },
];

export default App;
