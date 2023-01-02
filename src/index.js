import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";

//IMPORTING THE COMPONENTS
import BookComp from "./BookComp";

//IMPORTING/CONNECTING THE CSS FILE
import "./index.css";

//DECLEARATIONS
import { theBooks } from "./theBooks";

//THE RENDERING FUNCTIONS

function BookList() {
  return (
    <section className="booklist">
      {theBooks.map((bList) => {
        return <BookComp key={theBooks.id} {...bList}></BookComp>;
      })}
    </section>
  );
}

createRoot(document.getElementById("root")).render(<BookList />);

// ReactDOM.render(<BookList />, document.getElementById("root"));
