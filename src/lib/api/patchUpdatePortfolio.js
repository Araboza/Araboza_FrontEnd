import api from "./api";

export async function postUpdatePortfolio(user, post, portfolio) {
  try {
    await api.patch(`portfolio/${user}/${post}`, portfolio);
  } catch (e) {
    console.log(e);
  }
}
