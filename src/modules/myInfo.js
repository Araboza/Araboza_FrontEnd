import produce from "immer";

const GET_USER = "myInfo/GET_USER";
const SET_USER = "myInfo/SET_USER";
const ERROR = "myInfo/ERROR";
const SHOW = "myInfo/SHOW";

export const get_user = (user) => ({ type: GET_USER, user });
export const set_user = () => ({ type: SET_USER });
export const error = (error) => ({ type: ERROR, error });
export const show_user = () => ({ type: SHOW });

const initialState = {
  user: { img: "", username: "", major: "" },
  show: false,
  error: null,
};

function myInfo(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return produce(state, (draft) => {
        draft.user = action.user;
      });
    case SHOW:
      return produce(state, (draft) => {
        draft.show = !draft.show;
      });
    case ERROR:
      return produce(state, (draft) => {
        draft.error = action.error;
      });
    default:
      return state;
  }
}

export default myInfo;
