import api from "./api";

export async function putLogout() {
  try {
    await api.put("/user/logout");
  } catch (e) {
    console.log(e);
  }
}
