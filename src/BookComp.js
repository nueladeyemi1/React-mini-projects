import React from "react";

const trial = function() {
  alert("This is React");
};

const BookComp = function(props) {
  let { imgItem, titleText, authorText } = props;
  return (
    <article className="book">
      <img onClick={trial} src={imgItem} alt="" />
      <h1>{titleText}</h1>
      <h4>{authorText}</h4>
    </article>
  );
};

export default BookComp;
