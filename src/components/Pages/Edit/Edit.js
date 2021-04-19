import React from "react";
import "../Edit/Edit.css";
import { db, auth } from "../Transaction/firebase-config";
import Loader from "react-loader-spinner";
function Edit(props) {

  const [book, getBook] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let Book = {};
    db.collection("books")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          if (data.id === props.match.params.id) {
            setLoading(true);
            Book = data;
          }
        });
        getBook(Book);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      
      {loading ? (
        <form>
          <span>Book Name</span>
          <input type="text" placeholder={book.Name}></input>
          <span>Genre</span>
          <input type="text" placeholder={book.Genre}></input>
          <span>Year</span>
          <input type="text" placeholder={book.Year}></input>
          <span>Author</span>
          <input type="text" placeholder={book.Author}></input>
        </form>
      ) : (
        <div className="loader">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000}
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(Edit);
