// import Kanishk from "./first";
import Listgroup from "./components/Listgroup";
import Hello from "./components/Hello";
import { useState } from "react";
// import { useEffect} from "react";

function App() {
  var name = ["Kanishk", "Aman", "Rahul", "Rohit", "Raj"];
  const [i, button] = useState(0);
  var selecteditem = (name: string) => {
    console.log(name);
  };

  // Function to change the color of the button continuously
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     button((prev) => (prev + 1) % 7);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  function buttons(i: Number) {
    switch (i) {
      case 1:
        return "btn btn-primary";
      case 2:
        return "btn btn-secondary";
      case 3:
        return "btn btn-success";
      case 4:
        return "btn btn-danger";
      case 5:
        return "btn btn-warning";
      case 6:
        return "btn btn-info";

      default:
        return "btn btn-light";
    }
  }

  return (
    <>
      {" "}
      <Listgroup
        name={name}
        heading="hero"
        onselectedname={selecteditem}
      ></Listgroup>
      <Hello>
        <h1>hello</h1>
        <button
          className={buttons(i)}
          onClick={() => {
            // useEffect;
            button((prev) => (prev + 1) % 7);
          }}
        >
          Submit
        </button>
      </Hello>
    </>
  );
}
export default App;
