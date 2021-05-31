import React, { useCallback, memo, useState, ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BooksAction from "../../store/action/Books";
import { RootState } from "../../index";
import { BookData } from "../../constants/book";

import "../Edit/Edit.scss";
import "./NewBook.scss";

export const NewBook = memo(() => {
  const state = useSelector(({ addBook }: RootState) => addBook.value);
  const dispatch = useDispatch();
  const [changedValue, setValue] = useState({
    Name: state.name,
    Genre: state.genre,
    Year: state.year,
    Author: state.author,
    BgImage:
      "https://i.pinimg.com/originals/ea/3f/d3/ea3fd3102ccf575e3c33954f73eab78d.jpg",
    id: Math.floor(Math.random() * 99),
  });

  const inputValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>, keyName: string) => {
      setValue({ ...changedValue, [keyName]: event.target.value });
    },
    [changedValue]
  );

  const addBook = useCallback(() => {
    if (changedValue.Name !== "") {
      dispatch(BooksAction.setBooks(changedValue));
    }
  }, [changedValue]);

  return (
    <div className="addContainer">
      <div className="addPoster"></div>
      <form>
        <div className="addContainer_child">
          <span>Name</span>
          <input
            type="text"
            value={changedValue.Name}
            onChange={(event) => inputValue(event, BookData.Name)}
          ></input>
        </div>
        <div className="addContainer_child">
          {" "}
          <span>Genre</span>
          <input
            type="text"
            value={changedValue.Genre}
            onChange={(event) => inputValue(event, BookData.Genre)}
          ></input>
        </div>
        <div className="addContainer_child">
          {" "}
          <span>Year</span>
          <input
            type="text"
            value={changedValue.Year}
            onChange={(event) => inputValue(event, BookData.Year)}
          ></input>
        </div>
        <div className="addContainer_child">
          <span>Author</span>
          <input
            type="text"
            value={changedValue.Author}
            onChange={(event) => inputValue(event, BookData.Author)}
          ></input>
        </div>
        (
        <NavLink
          className="saveBtn"
          onClick={addBook}
          to={changedValue.Name!=='' ? {pathname: "books" } : {pathname: "404"}}
        >
          Add
        </NavLink>
        )
      </form>
      <div className="shadowBox"></div>
    </div>
  );
});
