interface ActionType {
  type: string;
  value: any;
}

const AddBook = (
  state = {
    value: {
      Name: "",
      Genre: "",
      Year: "",
      Author: "",
    },
  },
  action: ActionType
) => {
  switch (action.type) {
    case "NewBook":
      return { value: action.value };
    default:
      return state;
  }
};

const JwtToken = (
  state = {
    value: "",
  },
  action: any
) => {
  switch (action.type) {
    case "AddToken":
      return { value: action.value };
    default:
      return state;
  }
};

export { AddBook, JwtToken };
