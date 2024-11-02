import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  function closeAlert() {
    setIsVisible(false);
  }
  return (
    <>
      {isVisible && <Alert message="Hello user" onclose={closeAlert} />}
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
}
export default App;
