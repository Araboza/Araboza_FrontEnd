import { combineReducers } from "redux";
import posts from "./posts";
import myInfo from "./myInfo";
import user from "./user";

const reducer = combineReducers({ posts, myInfo, user });

export default reducer;
