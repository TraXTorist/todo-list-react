import HeaderSvg from "./assets/header-svg.svg";
import "./App.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-title">ToDo List</div>
      <img
        className="header-svg
    "
        src={HeaderSvg}
        alt="#"
      />
    </header>
  );
}
