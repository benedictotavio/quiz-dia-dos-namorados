import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import { TbClover } from 'react-icons/tb'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <div className="quiz_icon">
        <TbClover />
      </div>
    </div>
  );
};

export default Welcome;
