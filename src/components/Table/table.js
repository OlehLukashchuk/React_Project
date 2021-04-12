import * as React from "react";
import { db, auth } from "./firebase-config";
import { DataGrid } from "@material-ui/data-grid";

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
    width : 120
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

let rows = [];

// function Table() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//     </div>
//   );
// }

class Table extends React.PureComponent {
  state = {
    books: null,
  };
  componentDidMount() {
    const books = [];
    db.collection("books")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          books.push(data);
        });
        this.setState({ books: books });
      })
      .catch((error) => console.error(error));
      rows = books;
  }
  render() {
    return (
      <div style={{ height: 400, width: "100%" }}>
        {console.log(rows)}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    );
  }
}

export default React.memo(Table);
