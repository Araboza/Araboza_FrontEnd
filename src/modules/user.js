import dotenv from "dotenv";
dotenv.config();

const GET_USER = "user/GET_USER";
const REAMOVE_USER = "user/REAMOVE_USER";

export const getUser = () => ({ type: GET_USER });
export const RemoveUser = () => ({ type: REAMOVE_USER });

const initialState = { cookie: "sjflsfjsldsjflsdjflksdj" };

function getCookie() {
  const cookie = document.cookie;
  const start = cookie.indexOf("auth");
  if (start === -1) return null;
  const end = cookie.indexOf(";", start);
  const result = cookie.slice(start, end).split("=");
  return result[1];
}

function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { cookie: getCookie() };
    case REAMOVE_USER:
      return { cookie: null };
    default:
      return state;
  }
}

export default user;
