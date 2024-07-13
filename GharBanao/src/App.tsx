import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lahore", "Karachi", "Islambad", "Pindi"];
  // items = [];

  const [selectedItem, setSelectedItem] = useState(0);

  // const msg = items.length === 0 ? <p>No Items found</p> : null;

  // const GetMsg = () => {
  //   return items.length === 0 ? <p>No Items Found</p> : null;
  // };

  return (
    <>
      <h1>List of Items</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
