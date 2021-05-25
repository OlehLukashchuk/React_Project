import { db } from "../../components/Pages/Book/Firebase-config";
import {AppDispatch} from "../.."

interface DataType {
    Name: string,
    Genre: string,
    Year: number,
    Author: string,
    BgImage: string,
    id: number,
}

export default class BooksAction {
  static setBooksAction = (data : DataType) => {
    return { type: "NewBook", value: data };
  };


  static setBooks = (data : DataType) => {
    return  (dispatch : AppDispatch) => {
      db.collection("books")
        .doc(`${data.id}`)
        .set(data)
        .then(() => {
          dispatch(BooksAction.setBooksAction(data));
        });
    };
  };

}
