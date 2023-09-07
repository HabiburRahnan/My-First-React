import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Singer from "./Singer";
import BookStore from "./BookStore";
import Book from "./Book";

function App() {
  const singers = [
    { id: 1, name: "Habibur Rahman", age: 19 },
    { id: 2, name: "nisad islam", age: 21 },
    { id: 3, name: "shakhawat hoissin", age: 20 },
    { id: 4, name: "shakil khan", age: 22 },
  ];
  const books = [
    { id: 1, name: "physic", price: 100 },
    { id: 2, name: "math", price: 100 },
    { id: 3, name: "computer", price: 100 },
    { id: 4, name: "chemistry", price: 100 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {books.map((book) => (
        <BookStore book={book}></BookStore>
      ))}

      {singers.map((singer) => (
        <Todo singer={singer}></Todo>
      ))}
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      {/* <Student score="7" great="99"></Student>
      <Student score="8" great="70"></Student>
      <Student score="10" great="89"></Student>
      <Student score="9" great="90"></Student>
      <Student></Student>
      <Student></Student>

      <Todo task="Learn react" isDone={false}></Todo>
      <Todo task="Explore core concept" isDone={true}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
    </>
  );
}
// const { score, great } = { score: "7", great: "99" };
// function Student({ score = 0, great = 0 }) {
//   console.log(score, great);
//   return (
//     <div className="student">
//       <h3>This is a student</h3>
//       <p>name:{score} </p>
//       <p>age: {great}</p>
//     </div>
//   );
// }
export default App;
