import api from "./api";

export async function GetPosts() {
  const { data } = await api.get("/portfolio");
  return data;
}
