const initialState = {
  pizzaCount: 0,
  pizzzaName: "",
  pizzaWeight: 0,
  pizzaPrice: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OBJECT": {
      return {
        ...state,
        pizzaCount: action.pizzaCount,
        pizzzaName: action.pizzzaName,
        pizzaWeight: action.pizzaWeight,
        pizzaPrice: action.pizzaPrice,
      };
    }
    default:
      return state;
  }
};
export default reducer;
