import api from "./api";

export async function getPortfolio({ user, post }) {
  try {
    const { data } = await api.get(`portfolio/${user}/${post}`);
    return data;
  } catch (e) {
    console.log("연결 할 수 없습니다");
  }
}
