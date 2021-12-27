import api from "./api";

export async function putLogout() {
  await api.put("/user/logout");
}
