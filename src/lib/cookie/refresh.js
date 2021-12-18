export function getRefresh() {
  const cookie = document.cookie;
  const start = cookie.indexOf(process.env.REACT_APP_REFRESH_COOKIE_NAME);
  if (start === -1) return null;
  const end = cookie.indexOf(";", start);
  const result = cookie.slice(start, end).split("=");
  return result[1];
}