import "./App.css";

export default function Input({ value, onChange, onClick }) {
  return (
    <form className="input-form">
      <input
        value={value}
        onChange={onChange}
        type="text"
        id="input"
        placeholder="Add your items"
      />
      <button onClick={onClick} type="button" className="input-btn">
        +
      </button>
    </form>
  );
}
