import { combineReducers } from "redux";
import notice from "./notice";
import posts from "./posts";

const reducer = combineReducers({ posts, notice });

export default reducer;
