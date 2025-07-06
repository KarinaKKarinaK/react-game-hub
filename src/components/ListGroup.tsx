import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Warsaw", "Cracow", "Gdansk", "Wroclaw", "Poznan"];
  // items = [];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      {/* React.createElement('h1') */}
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* Convert all items (by mapping) to "li" elements */}
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
