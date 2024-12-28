import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
