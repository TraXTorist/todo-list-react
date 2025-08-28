import Header from "./Header";
import Input from "./Input";
import Card from "./Card";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function createCard() {
    setCards([{ id: Date.now(), title: input }, ...cards]);
    setInput("")
  }

  function renameCard(idRename) {
    let card = cards.find((card) => card.id === idRename);
    if (!card) {
      return;
    }
    setInput(card.title);
    setEditingId(idRename);
  }

  function saveCard() {
    if (editingId === null) {
      return;
    }

    setCards((cards) =>
      cards.map((card) =>
        card.id === editingId ? { ...card, title: input } : card
      )
    );
    setInput("");
    setEditingId(null);
  }

  function deleteCard(idRemove) {
    setCards((cards) => cards.filter((card) => card.id !== idRemove));
  }

  return (
    <div className="wrapper">
      <Header />
      <Input onClick={editingId === null ? createCard : saveCard} value={input} onChange={handleInput} />

      <ul className="card-form">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              onDelete={() => deleteCard(card.id)}
              onRename ={() => renameCard(card.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
