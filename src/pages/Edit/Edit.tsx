import React, {
  memo,
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
} from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

import "./Edit.scss";
import { db } from "../Book/Firebase-config";
import { BookData } from "../../constants/book";

interface BookType {
  Name?: string;
  Author?: string;
  Year?: number;
  Genre?: string;
  BgImage?: string;
  posterImage?: string;
  shadow?: string;
}

interface EditBookProps {
  match: {
    url: {
      slice: (from: number, to: number) => string;
    };
    length: number;
  };
}

const From = 12;

export const Edit = memo(({ match }: EditBookProps) => {
  const [book, setBook] = useState<BookType>({});
  const [loading, setLoading] = useState(false);


  const editBook = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>, keyName: string) => {
      setBook({ ...book, [keyName]: target.value });
    },
    [book]
  );

  const saveChanges = useCallback(() => {
    const bookId = match.url.slice(From, match.length);

    db.collection("books").doc(bookId).update({
      Name: book.Name,
      Author: book.Author,
      Year: book.Year,
      Genre: book.Genre,
    });
  }, [book]);

  useEffect(() => {
    const bookId = match.url.slice(From, match.length);
    let bookTemplate = {};

    setLoading(true);
    db.collection("books")
      .doc(bookId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          const data = snapshot.data();
          bookTemplate = { ...data };
          setBook(bookTemplate);
          setLoading(false);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(book)
  if (loading) {
    return (
      <div className="loader">
        <div className="loader">
          <Loader type="ThreeDots" color="brown" height={100} width={100} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg" style={{ backgroundImage: `url('${book.BgImage}')` }}>
      <div className="editContainer">
        <div
          className="poster"
          style={{ backgroundImage: `url('${book.posterImage}')` }}
        ></div>
        <form>
          <div className="editContainer_child">
            <span>Name</span>
            <input
              type="text"
              value={book.Name}
              onChange={(event) => editBook(event, BookData.Name)}
            ></input>
          </div>
          <div className="editContainer_child">
            <span>Genre</span>
            <input
              type="text"
              value={book.Genre}
              onChange={(event) => editBook(event, BookData.Genre)}
            ></input>
          </div>
          <div className="editContainer_child">
            <span>Year</span>
            <input
              type="text"
              value={book.Year}
              onChange={(event) => editBook(event, BookData.Year)}
            ></input>
          </div>
          <div className="editContainer_child">
            <span>Author</span>
            <input
              type="text"
              value={book.Author}
              onChange={(event) => editBook(event, BookData.Author)}
            ></input>
          </div>
          <Link className="saveBtn" onClick={saveChanges} to="/books">
            Save
          </Link>
        </form>
        <div
          className="shadowBox"
          style={{ backgroundColor: book.shadow }}
        ></div>
      </div>
    </div>
  );
});
