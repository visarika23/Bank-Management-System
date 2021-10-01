const initialState = {
  user_ID: "0",
  accountNo: null,
  credential: {
    userName: null,
    password: null,
  },
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "User_ID":
      return { ...state, user_ID: action.data };

    case "Acc_no":
      return { ...state, accountNo: action.data };

    case "User_credential":
      return { ...state, credential: action.data };

    default:
      return { ...state };
  }
};
