import * as React from "react";
import { db } from "./Firebase-config";
import { DataGrid } from "@material-ui/data-grid";
import Search from "../../Search/Search";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../Book/Style.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";

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
    // Цікавить цей тип
    renderCell: (props: any) => {
      console.log(props);
      return <Button match={props.id}></Button>;
    },
  },
];

interface BookType {
  Author?: String;
  Name?: String;
  Genre?: String;
  Year?: Number;
  id?: Number;
  posterImage?: String;
  shadow?: String;
  BgImage?: String;
}

function Book() {
  const [books, setBooks] = React.useState<BookType[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <div>
      {!loading ? (
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
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={books}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
      ) : (
        <div className="loader">
          <Loader type="ThreeDots" color="brown" height={100} width={100} />
        </div>
      )}
    </div>
  );
}

// class Book extends React.PureComponent {
//   state = {
//     books: [],
//   };
//   componentDidMount() {
//     const books = [];
//     db.collection("books")
//       .get()
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           const data = doc.data();
//           books.push(data);
//         });
//         this.setState({ books: books });
//       })
//       .catch((error) => console.error(error));
//   }
//   render() {
//     return(
//     <div>
//       {loading ? (
//         <div>
//           <div className="transactionNeck">
//             <div className="transactionNeck__left">
//               <nav className="left__nav">
//                 <ol>
//                   <li></li>
//                   <li>Volt</li>
//                   <li>Transactions</li>
//                 </ol>
//               </nav>
//               <h4>Transactions</h4>
//               <p>Your web analytics dashboard template.</p>
//             </div>
//             <div className="transactionNeck__right">
//               <input type="button" value="Share" id="share"></input>
//               <input type="button" value="Export" id="export"></input>
//             </div>
//           </div>
//           <div className="tableSettings">
//             <Search class="largeContainer" inputSize="large" />
//             <div className="settingsLogo"></div>
//           </div>
//           <div style={{ height: 400, width: "100%" }}>
//             <DataGrid
//               rows={books}
//               columns={columns}
//               pageSize={5}
//               checkboxSelection
//             />
//           </div>
//         </div>
//       ) :
//       <div className="loader">
//         <Loader
//           type="ThreeDots"
//           color="#00BFFF"
//           height={100}
//           width={100}
//            //3 secs
//         />
//       </div>
//       }
//     </div>
//   );
//   }
// }

export default React.memo(Book);
