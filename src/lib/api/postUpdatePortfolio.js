import api from "./api";

export async function postUpdatePortfolio(user, post, portfolio) {
  console.log(portfolio);
  await api.patch(`portfolio/${user}/${post}`, portfolio);
}
