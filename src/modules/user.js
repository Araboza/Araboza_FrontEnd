import { getRefresh } from "../lib/cookie/refresh";

const GET_USER = "user/GET_USER";
const REAMOVE_USER = "user/REAMOVE_USER";

export const getUser = () => ({ type: GET_USER });
export const RemoveUser = () => ({ type: REAMOVE_USER });

const initialState = { cookie: null };

function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { cookie: getRefresh() };
    case REAMOVE_USER:
      return { cookie: null };
    default:
      return state;
  }
}

export default user;
