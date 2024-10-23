function Listgroup() {
  const name = ["Kanishk", "Aman", "Rahul", "Rohit", "Raj"];
  return (
    // Fragment is used to return multiple elements without adding extra nodes to the DOM
    <>
      <h1>List of random names</h1>
      <ul className="list-group">
        {/* Travel the name list using map function and give key for each item to perform crud on it */}
        {name.map((n, index) => (
          <li key={index} className="list-group-item">
            {index + 1}-{n}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Listgroup;
