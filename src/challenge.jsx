import { useState } from "react";

export default function Challenge() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleDecrementStep() {
    setStep((currentStep) => {
      return (currentStep -= 1);
    });
  }
  function handleIncrementStep() {
    setStep((currentStep) => {
      return (currentStep += 1);
    });
  }

  function handleDecrementCount() {
    setCount((currentCount) => {
      return (currentCount -= step);
    });
  }
  function handleIncrementCount() {
    setCount((currentCount) => {
      return (currentCount += step);
    });
  }

  const date = new Date("December 11 2025");
  date.setDate(date.getDate() + count);

  return (
    <div className="challenge">
      <span>This Is Challenge</span>
      <div className="fields">
        <button onClick={handleDecrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleIncrementStep}>+</button>
      </div>
      <div className="fields">
        <button onClick={handleDecrementCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrementCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0 && `Today is `}
          {count > 0 && `${count} days from Today is `}
          {count < 0 && `${Math.abs(count)} days ago from Today is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
