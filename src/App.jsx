import Header from "./Header";
import Input from "./Input";
import Card from "./Card";
import { useState } from "react";
import "./App.css";

export default function App() {


  return (
    <div className="wrapper">
      <Header />
      <Input />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
