import { useState } from "react";

interface AlertProps {
  message: string;
}

const Alert = ({ message }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div
        className={`alert alert-warning alert-dismissible fade ${
          isVisible ? "show" : "hide"
        }`}
        role="alert"
      >
        {message}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setIsVisible(false)}
        ></button>
      </div>
      <button
        onClick={() => {
          setIsVisible(true);
          console.log("clicked alert");
        }}
      >
        Show alert
      </button>
    </>
  );
};

export default Alert;
