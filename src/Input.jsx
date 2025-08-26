import "./App.css";

export default function Input() {

  return (
    <form className="input-form">
      <input type="text" id="input" placeholder="Add your items" />
      <button className="input-btn">+</button>
    </form>
  );
}
