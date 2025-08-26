import "./App.css";
import Pen from "./assets/pen.svg";
import Garbage from "./assets/garbage.svg";

export default function Card() {

  return (
    <form className="card-form">
      <input readOnly type="text" id="card-input" />
      <span className="card-text">New card</span>
      <div className="card-buttons">
        <button className="card-btn">
          <img className="card-svg" src={Pen} alt="#" />
        </button>
        <button className="card-btn">
          <img className="card-svg" src={Garbage} alt="#" />
        </button>
      </div>
    </form>
  );
}
