import Header from "./Header";
import Input from "./Input";
import Card from "./Card";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState([]);
  const [idRename, setIdRename] = useState(null);
  const [trueValue, setTrueValue] = useState("");

  function createCard() {
    if (input === "") {
      setTrueValue("Invalid data")
      return
    }
    setCards([{ id: Date.now(), title: input }, ...cards]);
    setTrueValue("Add to your list")
    setInput("");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrueValue("")
    }, 2000)

    return () => clearTimeout(timer)
  }, [trueValue])

  function deleteCard(idRemove) {
    setCards((cards) => cards.filter((card) => card.id !== idRemove));
  }

  function renameCard(idRename) {
    const card = cards.find((card) => card.id === idRename);
    if (!card) return;

    setInput(card.title);
    setIdRename(idRename);
  }

  function saveCard() {
    if (idRename === null) {
      return;
    }

    setCards((cards) =>
      cards.map((card) =>
        card.id === idRename ? { ...card, title: input } : card
      )
    );
    setInput("");
    setIdRename(null);
  }

  return (
    <div className="wrapper">
      <Header />
      <Input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onClick={idRename === null ? createCard : saveCard}
        message={trueValue}
      />

      <div className="card-form">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              onDelete={() => deleteCard(card.id)}
              onRename={() => renameCard(card.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
