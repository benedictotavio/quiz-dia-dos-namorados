import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QuizProvider } from "./context/quiz";
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reward from "./components/Reward";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/reward" element={<Reward />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  </React.StrictMode>
);
