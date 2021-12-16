import { combineReducers } from "redux";
import notice from "./notice";
import posts from "./posts";
import myInfo from "./myInfo";

const reducer = combineReducers({ posts, notice, myInfo });

export default reducer;
