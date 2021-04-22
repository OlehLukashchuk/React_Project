import React from "react";
import "../Edit/Edit.css";
import { db, auth } from "../Book/firebase-config";
import Loader from "react-loader-spinner";

function Edit(props) {
  const [book, setBook] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [opacity, setOpacity] = React.useState(1);
  const editUser = (event, keyName) => {
    setBook({ ...book, [keyName]: event.target.value });
  };

  React.useEffect(() => {
    const bookId = props.match.url.charAt(props.match.url.length - 1);
    let bookTemplate = {};
    setLoading(true);
    db.collection("books")
      .doc(bookId)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        bookTemplate = data;
        setBook(bookTemplate);
        setLoading(false);
        setOpacity(1);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg" style ={{opacity:opacity,backgroundImage:`url('${book.BgImage}')`}}>
      {!loading ? (
        <div className="editContainer">
          <div className="poster" style ={{backgroundImage:`url('${book.posterImage}')`}}></div>
          <form>
            <div className="editContainer_child">
              <span>Name</span>
              <input
                type="text"
                value={book.Name}
                onChange={(event) => editUser(event, "Name")}
              ></input>
            </div>
            <div className="editContainer_child">
              {" "}
              <span>Genre</span>
              <input
                type="text"
                value={book.Genre}
                onChange={(event) => editUser(event, "Genre")}
              ></input>
            </div>
            <div className="editContainer_child">
              {" "}
              <span>Year</span>
              <input
                type="text"
                value={book.Year}
                onChange={(event) => editUser(event, "Year")}
              ></input>
            </div>
            <div className="editContainer_child">
              <span>Author</span>
              <input
                type="text"
                value={book.Author}
                onChange={(event) => editUser(event, "Author")}
              ></input>
            </div>
          </form>
          <div className="shadowBox" style={{backgroundColor:book.shadow}}></div>
        </div>
      ) : (
        <div className="loader">
          <Loader type="ThreeDots" color="brown" height={100} width={100} className="loader"/>
        </div>
      )}
    </div>
  );
}

export default React.memo(Edit);
