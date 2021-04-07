export const getApiPath = (path) => {
  let apiUrl = "https://srsgen.herokuapp.com/" + path;
  return apiUrl + path;
};
