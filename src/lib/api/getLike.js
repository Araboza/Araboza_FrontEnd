import api from "./api";

export async function GetLike(data) {
  try {
    const likes = localStorage.getItem("araboza_like").split(",");
    const index = likes.findIndex((i) => parseInt(i) === data.id);
    await api.post(
      `/portfolio/${data.userId || data.user.id}/${data.title}/like`,
      { toggle: index !== -1 ? true : false }
    );
  } catch (e) {
    localStorage.setItem("araboza_like", "");
  }
}
