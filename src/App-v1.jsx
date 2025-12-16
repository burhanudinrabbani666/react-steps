import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // useState in Practice
  // Dont use Let
  // const [test, setTest] = useState({ name: "Jonas" });

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1)
      setStep((currentStep) => {
        return currentStep - 1;
      });
  }

  function handleNext() {
    // step = step + 1; // ❗ Dont set State Manually
    // test.name = "fred"; // ❗ BAD Practice
    // setTest({ name: "Bani" });

    if (step < 3)
      setStep((currentStep) => {
        return currentStep + 1;
      });
  }

  function handleOpen() {
    setIsOpen((currentIsOpen) => {
      return !currentIsOpen;
    });
  }

  return (
    //REACT FRAGMENT
    <>
      <button
        onClick={handleOpen}
        className="close" //
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
