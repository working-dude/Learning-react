import { useState } from "react";

function Listgroup() {
  var name = ["Kanishk", "Aman", "Rahul", "Rohit", "Raj"];
  // name = [];
  // Hook to store the state of the component. It returns an array with two elements. The first element is the current value of the state, and the second element is a function that lets you update it.
  const [i, selected_index] = useState(0);
  function selected(index: number, index_selected: number) {
    if (index === index_selected) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }
  return (
    // Fragment is used to return multiple elements without adding extra nodes to the DOM
    <>
      <h1>List of random names</h1>
      <ul className="list-group">
        {name.length === 0 && <h1>No names to display</h1>}
        {/* Travel the name list using map function and give key for each item to perform crud on it */}
        {name.map((n, index) => (
          <li
            key={index}
            onClick={() => {
              console.log(n + "is clicked");
              selected_index(index);
            }}
            className={selected(index, i)}
          >
            {index + 1}-{n}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listgroup;
