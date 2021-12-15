import api from "./api";

export default async function getNotice(userId) {
  try {
    const { data } = await api.get(`/posts/${userId}`);
    return { data, error: "" };
  } catch (error) {
    return { error };
  }
}
