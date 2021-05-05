import React from "react";
import "../Edit/Edit.css";
import "../NewBook/NewBook.css";
import { NavLink } from "react-router-dom";
import { db } from "../Book/firebase-config";

import { useSelector, useDispatch } from "react-redux";
function NewBook(props) {
  useSelector((state) => state);
  const dispatch = useDispatch();
  const [changedValue, setValue] = React.useState({
    Name: "",
    Genre: "",
    Author: "",
    Year: "",
    BgImage: "https://cdn.wallpapersafari.com/82/30/IFn1K7.jpg",
    id: 4,
  });

  function addValue(event, keyName) {
    setValue({ ...changedValue, [keyName]: event.target.value });
  }

  function addBook() {
    dispatch({
      type: "newBook",
      value: changedValue,
    });
    const newId = changedValue.id;
    db.collection("books").doc(`${newId}`).set(changedValue);
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
            onChange={(event) => addValue(event, "Name")}
          ></input>
        </div>
        <div className="addContainer_child">
          {" "}
          <span>Genre</span>
          <input
            type="text"
            value={changedValue.Genre}
            onChange={(event) => addValue(event, "Genre")}
          ></input>
        </div>
        <div className="addContainer_child">
          {" "}
          <span>Year</span>
          <input
            type="text"
            value={changedValue.Year}
            onChange={(event) => addValue(event, "Year")}
          ></input>
        </div>
        <div className="addContainer_child">
          <span>Author</span>
          <input
            type="text"
            value={changedValue.Author}
            onChange={(event) => addValue(event, "Author")}
          ></input>
        </div>
        {changedValue.Name &&
        changedValue.Year &&
        changedValue.Author &&
        changedValue.Genre !== "" ? (
          <NavLink
            className="saveBtn"
            onClick={addBook}
            to={{ pathname: "books" }}
          >
            Add
          </NavLink>
        ) : (
          <button className="saveBtn" disabled={true}>
            Add
          </button>
        )}
      </form>
      <div className="shadowBox"></div>
    </div>
  );
}

export default React.memo(NewBook);
