import api from "./api";

export async function getLikePosts() {
  const { data } = await api.get("/like");
  return data;
}
