export const transformToJSON = (doc, ret) => {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
};

export const getBadRequest = (error) => {
  return {
    message: "Bad Request",
    error,
  };
};

export const getErrorRequest = (error) => {
  return {
    message: "Error Request",
    error,
  };
};

export const getSuccessRequest = (data) => {
  return {
    data: data ?? null,
    message: "OK",
  };
};
