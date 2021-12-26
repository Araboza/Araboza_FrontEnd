import api from "./api";

export async function PostToken(token) {
  try {
    await api.post("/user/login", { TokenId: token });
  } catch (e) {
    console.log(e);
  }
}
