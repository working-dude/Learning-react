// import Kanishk from "./first";
import Listgroup from "./components/Listgroup";
import Hello from "./components/Hello";

function App() {
  var name = ["Kanishk", "Aman", "Rahul", "Rohit", "Raj", "1"];
  var selecteditem = (name: string) => {
    console.log(name);
  };

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
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-warning">warning</button>
        <button className="btn btn-dark">dark</button>
      </Hello>
    </>
  );
}
export default App;
