import { getCookie } from "../lib/cookie/token";

const GET_USER = "user/GET_USER";
const LOGOUT_USER = "user/LOGOUT_USER";

export const getUser = () => ({ type: GET_USER });
export const logoutUser = () => ({ type: LOGOUT_USER });

const initialState = { cookie: null };

function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { cookie: getCookie() };
    case LOGOUT_USER:
      return { cookie: null };
    default:
      return state;
  }
}

export default user;
