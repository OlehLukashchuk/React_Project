import { ADD_TOKEN } from "../constants/store";
import { NEW_BOOK } from "../constants/store";

interface ActionType<T extends any>{
  type: string;
  value: T;
}

const AddBook = (
  state = {
    value: {
      name: "",
      genre: "",
      year: "",
      author: "",
    },
  },
  action: ActionType<any>
) => {
  switch (action.type) {
    case ADD_TOKEN:
      return { value: action.value };
    default:
      return state;
  }
};

const JwtToken = (
  state = {
    value: "",
  },
  action: ActionType<any>
) => {
  switch (action.type) {
    case NEW_BOOK:
      return { value: action.value };
    default:
      return state;
  }
};

export { AddBook, JwtToken };
