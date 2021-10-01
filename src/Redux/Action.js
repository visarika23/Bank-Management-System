export const addID = (data) => {
  return {
    type: "User_ID",
    data,
  };
};

export const addAccount = (data) => {
  return {
    type: "Acc_no",
    data,
  };
};

export const addCredential = (data) => {
  return {
    type: "User_credential",
    data,
  };
};
