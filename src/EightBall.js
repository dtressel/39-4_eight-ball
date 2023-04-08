import './EightBall.css';
import { useState } from "react";

const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");

  const showAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    setMsg(answers[randomIndex].msg);
    setColor(answers[randomIndex].color);
  }

  return (
    <div onClick={showAnswer} className="EightBall-ball" style={{backgroundColor: color}}>
      <div>{msg}</div>
    </div>
  )
}

export default EightBall;