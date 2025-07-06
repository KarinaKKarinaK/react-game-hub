function ListGroup() {
  const items = ["Warsaw", "Cracow", "Gdansk", "Wroclaw", "Poznan"];

  return (
    <>
      {/* React.createElement('h1') */}
      <h1>List</h1>
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
