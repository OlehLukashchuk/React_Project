import { db } from "../../components/Pages/Book/firebase-config";

export default class BooksAction {
  static setBooksAction = (data) => {
    return { type: "NewBook", value: data };
  };

  static setBooks = (data) => {
    return function (dispatch) {
      db.collection("books")
        .doc(`${data.id}`)
        .set(data)
        .then(() => {
          dispatch(BooksAction.setBooksAction(data));
        });
    };
  };
}
