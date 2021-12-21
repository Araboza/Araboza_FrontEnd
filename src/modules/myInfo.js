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
    img: "./Teemo.jpg",
    username: "Teemo",
    major: ["FrontEnd", "BackEnd", "AWS"],
    description: "프론트를 좋아합니다.",
  },
  posts: [
    {
      id: 1,
      title: "WOW",
      img: "./Teemo.jpg",
      classNum: 1205,
      name: "변찬우",
      like: 34,
      toggle: false,
    },
    {
      id: 2,
      title: "WOW",
      img: "./Teemo.jpg",
      classNum: 1205,
      name: "변찬우",
      like: 34,
      toggle: false,
    },
    {
      id: 3,
      title: "WOW",
      img: "./Teemo.jpg",
      classNum: 1205,
      name: "변찬우",
      like: 34,
      toggle: false,
    },
    {
      id: 4,
      title: "WOW",
      img: "./Teemo.jpg",
      classNum: 1205,
      name: "변찬우",
      like: 34,
      toggle: false,
    },
  ],
  show: false,
  error: null,
};

function myInfo(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return produce(state, (draft) => {
        // draft.user = action.user;
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
