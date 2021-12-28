import api from "./api";

export async function postRegister(UserData) {
  try {
    const { data } = await api.post("/user/register", {
      TokenId: UserData.tokenId,
      id: UserData.id,
    });
    return data.message;
  } catch (e) {
    return e.response.status;
  }
}
