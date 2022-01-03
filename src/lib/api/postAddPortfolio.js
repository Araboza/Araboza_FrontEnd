import api from "./api";

export async function postAddPortfolio(portfolio) {
  await api.post("/portfolio", { ...portfolio });
}
