import { db } from "../../pages/Book/Firebase-config";
import { AppDispatch } from "../../index";
import { NEW_BOOK } from "../../constants/store";

interface DataType {
  Name: string;
  Genre: string;
  Year: number;
  Author: string;
  BgImage: string;
  id: number;
}

export default class BooksAction {
  static setBooksAction = (data: DataType) => {
    return { type: NEW_BOOK, value: data };
  };

  static setBooks = (data: DataType) => {
    return (dispatch: AppDispatch) => {
      db.collection("books")
        .doc(`${data.id}`)
        .set(data)
        .then(() => {
          console.log(data)
          dispatch(BooksAction.setBooksAction(data));
        });
    };
  };
}
