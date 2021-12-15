import api from "./api";

export async function GetPosts() {
  const { data } = await api.get("/posts");
  return data;
}
