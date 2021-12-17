import { combineReducers } from "redux";
import notice from "./notice";
import posts from "./posts";
import myInfo from "./myInfo";
import user from "./user";

const reducer = combineReducers({ posts, notice, myInfo, user });

export default reducer;
