import api from "./api";

export async function GetPortfolios() {
  const { data } = await api.get("/portfolio");
  return data;
}
