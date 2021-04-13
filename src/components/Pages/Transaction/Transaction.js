import * as React from "react";
import { db, auth } from "./firebase-config";
import { DataGrid } from "@material-ui/data-grid";
import Search from "../../Search/search";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../Transaction/style.css"
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Book Name", width: 130 },
  { field: "Genre", headerName: "Book genre", width: 130 },
  {
    field: "Year",
    headerName: "Year",
    type: "number",
    width: 90,
  },
  {
    field: "Author",
    headerName: "Author",
    width: 120,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

function Transaction() {
  const [books, setBooks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const allBooks = [];
    db.collection("books")
      .get()
      .then((snapshot) => {
        setLoading(true);
        snapshot.forEach((doc) => {
          const data = doc.data();
          allBooks.push(data);
        });
        setBooks(allBooks);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <div className="transactionNeck">
            <div className="transactionNeck__left">
              <nav className="left__nav">
                <ol>
                  <li></li>
                  <li>Volt</li>
                  <li>Transactions</li>
                </ol>
              </nav>
              <h4>Transactions</h4>
              <p>Your web analytics dashboard template.</p>
            </div>
            <div className="transactionNeck__right">
              <input type="button" value="Share" id="share"></input>
              <input type="button" value="Export" id="export"></input>
            </div>
          </div>
          <div className="tableSettings">
            <Search class="largeContainer" inputSize="large" />
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
      ) :
      <div className="loader">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      </div>
      }
    </div>
  );
}

// class Transaction extends React.PureComponent {
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
//     return (
//       <div>
//         <div className="transactionNeck">
//           <div className="transactionNeck__left">
//             <nav className="left__nav">
//               <ol>
//                 <li></li>
//                 <li>Volt</li>
//                 <li>Transactions</li>
//               </ol>
//             </nav>
//             <h4>Transactions</h4>
//             <p>Your web analytics dashboard template.</p>
//           </div>
//           <div className="transactionNeck__right">
//             <input type="button" value="Share" id="share"></input>
//             <input type="button" value="Export" id="export"></input>
//           </div>
//         </div>
//         <div className="tableSettings">
//           <Search class="largeContainer" inputSize="large" />
//           <div className="settingsLogo"></div>
//         </div>
//         <div style={{ height: 400, width: "100%" }}>
//           <DataGrid
//             rows={this.state.books}
//             columns={columns}
//             pageSize={5}
//             checkboxSelection
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default React.memo(Transaction);
