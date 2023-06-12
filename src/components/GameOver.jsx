import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";
import { Link } from "react-router-dom";

import { TbMoneybag } from 'react-icons/tb'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      {quizState.score <= 9 ? <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button> : <><h2>Parabens!</h2>
        <Link to='/reward'>
          <i>
            <TbMoneybag />
          </i>  Pegue sua recompensa aqui..
        </Link>
      </>}
      <img src={WellDone} alt="Fim do Quiz" />
    </div>
  );
};

export default GameOver;
