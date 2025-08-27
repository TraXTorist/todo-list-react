import Header from "./Header";
import Input from "./Input";
import Card from "./Card";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function createCard() {
    setCards([{ id: Date.now(), title: input }, ...cards]);
  }

  function renameCard(idRename) {}

  function deleteCard(idRemove) {
    setCards((cards) => cards.filter((card) => card.id !== idRemove));
  }

  return (
    <div className="wrapper">
      <Header />
      <Input onClick={createCard} value={input} onChange={handleInput} />

      <ul className="card-form">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              onDelete={() => deleteCard(card.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
