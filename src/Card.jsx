import "./App.css";
import Pen from "./assets/pen.svg";
import Garbage from "./assets/garbage.svg";

export default function Card({ title, onDelete }) {
  return (
    <li className="card">
      <span className="card-text">{title}</span>
      <div className="card-buttons">
        <button type="button" className="card-btn">
          <img className="card-svg" src={Pen} alt="#" />
        </button>
        <button onClick={onDelete} type="button" className="card-btn">
          <img className="card-svg" src={Garbage} alt="#" />
        </button>
      </div>
    </li>
  );
}
