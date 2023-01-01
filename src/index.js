import React from "react";
import ReactDOM from "react-dom";

//IMPORTING/CONNECTING THE CSS FILE
import "./index.css";

//DECLEARATIONS

let booksCatalogue = {
  authorText: [
    "Colleen Hoover",
    "Prince Harry The Duke of Sussex",
    "Colleen Hoover",
  ],
  titleText: [
    "Reminders of Him: A Novel",
    "Spare",
    "It Starts with Us: A Novel (It Ends with Us)",
  ],
  imgItem: [
    "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/617uZq23IPL._AC_UL600_SR600,400_.jpg",
    "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/91Szm8FpdfL._AC_UL600_SR600,400_.jpg",
    "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
  ],
};

function BookList() {
  return (
    <section className="booklist">
      <BookComp
        authorText={booksCatalogue.authorText[0]}
        titleText={booksCatalogue.titleText[0]}
        imgItem={booksCatalogue.imgItem[0]}
      />
      <BookComp
        authorText={booksCatalogue.authorText[1]}
        titleText={booksCatalogue.titleText[1]}
        imgItem={booksCatalogue.imgItem[1]}
      />
      <BookComp
        authorText={booksCatalogue.authorText[2]}
        titleText={booksCatalogue.titleText[2]}
        imgItem={booksCatalogue.imgItem[2]}
      />
    </section>
  );
}

const BookComp = function(props) {
  return (
    <article className="book">
      <img src={props.imgItem} alt="" />
      <h1>{props.titleText}</h1>
      <h4>{props.authorText}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
