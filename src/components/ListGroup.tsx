import { useState } from "react";

function ListGroup() {
  let items = ["Warsaw", "Cracow", "Gdansk", "Wroclaw", "Poznan"];
  
  //Hook function (statte hook)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* React.createElement('h1') */}
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* Convert all items (by mapping) to "li" elements */}
        {items.map((item, index) => (
          <li 
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item} 
            onClick={() => { setSelectedIndex = index; }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
