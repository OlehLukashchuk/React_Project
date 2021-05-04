import React from "react";
import "../Edit/Edit.css";
import { db} from "../Book/firebase-config";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


function Edit(props) {
  const [book, setBook] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  // const [opacity, setOpacity] = React.useState(1);
  let history = useHistory();

  const editBook = (event, keyName) => {
    setBook({ ...book, [keyName]: event.target.value });
  };

  const saveChanges = () => {
    const bookId = props.match.url.slice(12, props.match.length);

    db.collection("books").doc(bookId).update({
      Name: book.Name,
      Author: book.Author,
      Year: book.Year,
      Genre: book.Genre,
    })

  };


  React.useEffect(() => {

    const bookId = props.match.url.slice(12, props.match.length);
    let bookTemplate = {};
    setLoading(true);
    db.collection("books")
      .doc(bookId)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          const data = snapshot.data();
          bookTemplate = {...data};
          setBook(bookTemplate);
          setLoading(false);
          // setOpacity(1);
        } else {
          setTimeout(() => {
            history.push("/Error");
          }, 2000);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      className="bg"
      style={{backgroundImage: `url('${book.BgImage}')` }}
    >
      {!loading ? (
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
                onChange={(event) => editBook(event, "Name")}
              ></input>
            </div>
            <div className="editContainer_child">
              {" "}
              <span>Genre</span>
              <input
                type="text"
                value={book.Genre}
                onChange={(event) => editBook(event, "Genre")}
              ></input>
            </div>
            <div className="editContainer_child">
              {" "}
              <span>Year</span>
              <input
                type="text"
                value={book.Year}
                onChange={(event) => editBook(event, "Year")}
              ></input>
            </div>
            <div className="editContainer_child">
              <span>Author</span>
              <input
                type="text"
                value={book.Author}
                onChange={(event) => editBook(event, "Author")}
              ></input>
            </div>
            <Link className="saveBtn" onClick={saveChanges} to='/books'>
              Save
            </Link>
          </form>
          <div
            className="shadowBox"
            style={{ backgroundColor: book.shadow }}
          ></div>
        </div>
      ) : (
        <div className="loader">
          <Loader
            type="ThreeDots"
            color="brown"
            height={100}
            width={100}
            className="loader"
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(Edit);
