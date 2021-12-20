import api from "./api";

export async function GetLike({ data }) {
  await api.get(`/${data.user}/${data.PostName}/like`);
}
