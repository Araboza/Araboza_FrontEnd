import produce from "immer";

const GET_NOTICE = "notice/GET_NOTICE";
const SET_NOTICE = "notice/SET_NOTICE";
const SET_SHOW = "notice/SET_SHOW";

export const get_notice = (notice) => ({ type: GET_NOTICE, notice });
export const set_notice = () => ({ type: SET_NOTICE });
export const set_show = () => ({ type: SET_SHOW });

const initialState = {
  notice: [],
  show: false,
};

function notice(state = initialState, action) {
  switch (action.type) {
    case GET_NOTICE:
      return produce(state, (draft) => {
        draft.notice.push(...action.notice);
      });

    case SET_SHOW:
      const body = document.querySelector("body");
      if (!state.show) {
        body.style.position = "fixed";
        body.style.touchAction = "none";
        body.style.overflowY = "scroll";
      } else {
        body.style.position = "static";
        body.style.touchAction = "auto";
        body.style.overflowY = "visible";
      }
      return produce(state, (draft) => {
        draft.show = !draft.show;
      });
    default:
      return state;
  }
}

export default notice;
