import api from "./api";

export function GetMyPosts() {
  const { data } = api.get("/users/");
  return data;
}
