// import Kanishk from "./first";
import Listgroup from "./components/Listgroup";

function App() {
  var name = ["Kanishk", "Aman", "Rahul", "Rohit", "Raj", "1"];
  var selecteditem = (name: string) => {
    console.log(name);
  };

  return (
    <Listgroup
      name={name}
      heading="hero"
      onselectedname={selecteditem}
    ></Listgroup>
  );
}
export default App;
