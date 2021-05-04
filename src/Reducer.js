function AddBook(
  state = {
    value: {},
  },
  action
) {
  switch (action.type) {
    case "newBook":
      return { value: action.value };

    default:
      return state;
  }
}

export default AddBook;
