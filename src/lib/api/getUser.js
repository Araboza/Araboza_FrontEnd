import api from "./api";

export async function GetUser() {
  const { data } = await api.get("/users");
  return data;
}
