import api from "./api";

export async function getUserPortfolio(user) {
  const { data } = await api.get(`/portfolio/${user}`);
  return data;
}
