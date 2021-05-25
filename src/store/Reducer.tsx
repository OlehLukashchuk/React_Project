interface ActionType {
  type: string;
  value: any;
}

function AddBook(
  state = {
    value: {
      Name: "",
      Genre: "",
      Year: "",
      Author: "",
    },
  },
  action: ActionType
) {
  switch (action.type) {
    case "NewBook":
      return { value: action.value };
    default:
      return state;
  }
}

function JwtToken(
  state = {
    value: '',
  },
  action: any
) {
  switch (action.type) {
    case "AddToken":
      return { value: action.value };
    default:
      return state;
  }
}

export { AddBook, JwtToken };
