/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';


const CheckoutStepper = ({ stepsConfig = [] }) => {
  const stepIndex = useSelector((state) => state.auth.stepIndex);
  const [currentStep, setCurrentStep] = useState(stepIndex);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setCurrentStep(stepIndex);
  }, [stepIndex]);


  if (!stepsConfig.length) return null;

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper-container">
        {stepsConfig.map((step, index) => {
          const isCompleted = currentStep > index + 1 || isComplete;
          const isActive = currentStep === index + 1;
          return (
            <div className="step-wrapper" key={index}>
              <div className={`step-circle ${isCompleted ? "completed" : isActive ? "active" : ""}`}>
                {isCompleted ? "✅" : isActive ? "⌛" : ""}
              </div>
              <div className="step-label">{step.name}</div>

              {index !== stepsConfig.length - 1 && (
                <div className={`step-line ${isCompleted ? "line-complete" : "line-incomplete"}`}></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="step-content">
        <ActiveComponent />
      </div>

      {/* {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default CheckoutStepper;
