export const loadPizza = (object) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_OBJECT",
      payload: object,
    });
  };
};
