import api from "./api";

export async function PostLogin(token) {
  try {
    const { data } = await api.post("/user/login", { TokenId: token });
    return data;
  } catch (e) {
    throw new Error(e.response.status);
  }
}
