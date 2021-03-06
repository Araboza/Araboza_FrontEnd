import produce from "immer";

const GET_USER = "myInfo/GET_USER";
const SET_USER = "myInfo/SET_USER";
const GET_MY_POSTS = "myInfo/GET_MY_POSTS";
const SET_MY_POSTS = "myInfo/SET_MY_POSTS";
const ERROR = "myInfo/ERROR";
const SHOW = "myInfo/SHOW";
const SET_LIKE = "myInfo/SET_LIKE";

export const get_user = (user) => ({ type: GET_USER, user });
export const set_user = () => ({ type: SET_USER });
export const get_my_posts = (posts) => ({ type: GET_MY_POSTS, posts });
export const set_my_posts = () => ({ type: SET_MY_POSTS });
export const error = (error) => ({ type: ERROR, error });
export const show_user = () => ({ type: SHOW });
export const set_like = (data) => ({
  type: SET_LIKE,
  data,
});

const initialState = {
  user: {
    img: "",
    id: "",
    major: [],
    introduce: "",
  },
  posts: [],
  show: false,
  error: null,
};

function myInfo(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return produce(state, (draft) => {
        draft.user.introduce = action.user.introduce;
        draft.user.img = action.user.picture;
        draft.user.id = action.user.id;
        draft.user.major = action.user.major;
      });
    case SET_MY_POSTS:
      return produce(state, (draft) => {
        // draft.posts = action.posts;
      });
    case SHOW:
      return produce(state, (draft) => {
        draft.show = !draft.show;
      });
    case ERROR:
      return produce(state, (draft) => {
        draft.error = action.error;
      });
    case SET_LIKE:
      return produce(state, (draft) => {
        const { id } = action.data;
        const index = draft.posts.findIndex((i) => i.id === id);
        if (index !== -1)
          draft.posts[index].toggle = !draft.posts[index].toggle;
      });
    default:
      return state;
  }
}

export default myInfo;
