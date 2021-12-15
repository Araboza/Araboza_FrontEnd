import api from "./api";

export default async function getNotice(userId) {
  const { data } = await api.get(`/posts/${userId}`);
  return data;
}
