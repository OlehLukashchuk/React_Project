import React, { useState, useEffect, memo } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";

import { db } from "./Firebase-config";
import Button from "./Button";
import "./Style.scss";
import { Search } from "../../components/Search";

interface BookType {
  Author?: string;
  Name?: string;
  Genre?: string;
  Year?: number;
  id?: number;
  posterImage?: string;
  shadow?: string;
  BgImage?: string;
}

const columns = [
  { field: "id", headerName: "ID", width: 130 },
  { field: "Name", headerName: "Book Name", width: 160 },
  { field: "Genre", headerName: "Book genre", width: 160 },
  {
    field: "Year",
    headerName: "Year",
    type: "number",
    width: 120,
  },
  {
    field: "Author",
    headerName: "Author",
    width: 120,
  },
  {
    field: "",
    headerName: "Edit Book",
    disableClickEventBubbling: true,
    width: 150,

    renderCell: (props: any) => {
      return <Button match={props.id}></Button>;
    },
  },
];

export const Book = memo(() => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const allBooks: BookType[] = [];
    setLoading(true);

    db.collection("books")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data) {
            allBooks.push(data);
          }
        });

        setBooks(allBooks);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="ThreeDots" color="brown" height={100} width={100} />
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="transactionNeck">
          <div className="transactionNeck__left">
            <nav className="left__nav">
              <ol>
                <li></li>
                <li>Volt</li>
                <li>Books</li>
              </ol>
            </nav>
            <h4>Books</h4>
            <p>Your web analytics dashboard template.</p>
          </div>
          <div className="transactionNeck__right">
            <input type="button" value="Share" id="share"></input>
            <input type="button" value="Export" id="export"></input>
          </div>
        </div>
        <div className="tableSettings">
          <Search class="largeContainer" inputSize="large" />
          <NavLink className="addBook" to={{ pathname: "newBook" }}>
            Add book
          </NavLink>
          <div className="settingsLogo"></div>
        </div>
        <div className="booksTable">
          <DataGrid
            rows={books}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
});
