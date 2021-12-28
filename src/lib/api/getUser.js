import api from "./api";

export async function GetUser() {
  try {
    const { data } = await api.get("/user");
    return data;
  } catch (e) {
    console.log(e);
  }
}
