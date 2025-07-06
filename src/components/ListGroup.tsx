function ListGroup() {
  let items = ["Warsaw", "Cracow", "Gdansk", "Wroclaw", "Poznan"];
  items = [];

  return (
    <>
      {/* React.createElement('h1') */}
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* Convert all items (by mapping) to "li" elements */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
