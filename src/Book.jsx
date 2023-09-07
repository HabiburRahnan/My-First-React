import "./Book.css";
export default function Book({ book }) {
  console.log(book);
  const { name, price } = book;
  return (
    <div className="book">
      <h3>Books name: {name}</h3>
      <p>price: {price}</p>
    </div>
  );
}
