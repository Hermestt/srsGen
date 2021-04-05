export const getApiPath = (path) => {
  let apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_DEV_API_URL;
  return apiUrl + path;
};
