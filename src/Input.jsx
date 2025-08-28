import "./App.css";

export default function Input({ value, onChange, onClick, message}) {
  return (
    <form className="input-form">
      <input value={value} onChange={onChange} type="text" id="input" placeholder="Add your items" />
      <button type="button" onClick={onClick} className="input-btn">+</button>
      <p style={{color: message === 'Invalid data' ? 'red' : 'green'}}>{message}</p>
    </form>
  );
}
