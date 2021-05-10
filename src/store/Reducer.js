function AddBook(
  state = {
    value: {
      Name: '',
      Genre: '',
      Year: '',
      Author: '',
    },
  },
  action
) {
  switch (action.type) {
    case "NewBook":
      return { value: action.value };
    default:
      return state;
  }
}

export default AddBook;
