import React from "react";
import "../Edit/Edit.css";
import "../NewBook/NewBook.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BooksAction from "../../../store/action/Books";


function NewBook() {
  const state = useSelector((state) => state.addBook.value);
  const dispatch = useDispatch();
  const [changedValue, setValue] = React.useState({
    Name: state.Name,
    Genre: state.Genre,
    Year: state.Year,
    Author: state.Author,
    BgImage:
      "https://i.pinimg.com/originals/ea/3f/d3/ea3fd3102ccf575e3c33954f73eab78d.jpg",
    id: Math.floor(Math.random() * 99),
  });

  function inputValue(event, keyName) {
    setValue({ ...changedValue, [keyName]: event.target.value });
  }

  function addBook() {
    dispatch(BooksAction.setBooks(changedValue));
  }

  return (
    <div className="addContainer">
      <div className="addPoster"></div>
      <form>
        <div className="addContainer_child">
          <span>Name</span>
          <input
            type="text"
            value={changedValue.Name}
            onChange={(event) => inputValue(event, "Name")}
          ></input>
        </div>
        <div className="addContainer_child">
          {" "}
          <span>Genre</span>
          <input
            type="text"
            value={changedValue.Genre}
            onChange={(event) => inputValue(event, "Genre")}
          ></input>
        </div>
        <div className="addContainer_child">
          {" "}
          <span>Year</span>
          <input
            type="text"
            value={changedValue.Year}
            onChange={(event) => inputValue(event, "Year")}
          ></input>
        </div>
        <div className="addContainer_child">
          <span>Author</span>
          <input
            type="text"
            value={changedValue.Author}
            onChange={(event) => inputValue(event, "Author")}
          ></input>
        </div>
        (
        <NavLink
          className="saveBtn"
          onClick={addBook}
          to={{ pathname: "books" }}
        >
          Add
        </NavLink>
        )
      </form>
      <div className="shadowBox"></div>
    </div>
  );
}

// class NewBook extends React.PureComponent {

//   render() {

//     return {

//     };
//   }
// }

export default React.memo(NewBook);
