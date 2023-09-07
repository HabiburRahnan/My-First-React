import Book from "./Book";
export default function BookStore({ book }) {
  console.log(book);
  // const { name, price } = book;
  return (
    <div>
      <h3>Books name: {book.name}</h3>

      <Book book={book}></Book>
    </div>
  );
}
