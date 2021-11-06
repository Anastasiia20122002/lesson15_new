import { combineReducers } from "redux";
import infoReducer from "./infoReducer";

const reducers = combineReducers({
  infoPizza: infoReducer,
});
export default reducers;
