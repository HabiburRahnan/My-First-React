// export default function Todo({ task, isDone}) {

//   return (
//     <div>
//       <li>Task: {task}</li>

//     </div>
//   );
// }
// export default function Todo({ task, isDone}) {
//     if(isDone=== true){
//         return <li>finish: {task}</li>

//     }
//     else{
//         return<li>work on: {task}</li>
//     }

// }

export default function Singer({ singer }) {
  console.log(singer);
  return (
    <div>
      <h3>singer: {singer.name}</h3>
      <p>age: {singer.age}</p>
    </div>
  );
}
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>finish: {task}</li>;
//   }
//   return<li>work on: {task}</li>
// }
