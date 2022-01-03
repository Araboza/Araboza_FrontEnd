import api from "./api";

export async function deleteProtfolio(user, post) {
  try {
    const { data } = api.delete(`/portfolio/${user}/${post}`);
    return data;
  } catch (e) {
    console.log(e);
  }
}
