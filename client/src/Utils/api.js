export const getApiPath = (path) => {
  let baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEV_API_URL
      : process.env.REACT_APP_PROD_API_URL;

  let apiUrl = baseUrl + path;

  return apiUrl;
};
