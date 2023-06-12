import { useContext } from "react";

import { QuizContext } from "../context/quiz";
import { FaCrown } from 'react-icons/fa'

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Prepare-se...</h2>
      <p>Lembre-se que seu princeso <i>
        <FaCrown /> </i>estará de olho!
      </p>
      <h5>Isso pode alterar sua <code>recompensa</code> no final do quiz.</h5>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
  
        <div class="cat">
          <div class="ear ear--left"></div>
          <div class="ear ear--right"></div>
          <div class="face">
            <div class="eye eye--left">
              <div class="eye-pupil"></div>
            </div>
            <div class="eye eye--right">
              <div class="eye-pupil"></div>
            </div>
            <div class="muzzle"></div>
          </div>
        </div>
   

    </div>
  );
};

export default PickCategory;
