import api from "./api";

export async function PostToken(token) {
  await api.post("/token", { token });
}
