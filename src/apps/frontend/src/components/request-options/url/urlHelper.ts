export const getUrlObject = (url: string) => {
  return new URL(url);
};

export const isValidUrl = (url: string) => {
  try {
    new URL(url);
  } catch (_) {
    return false;
  }
  return true;
};

export const getParamsQuery = (search: string) => {
  const queryString = search.slice(1);
  const queryParam = Object.fromEntries(new URLSearchParams(queryString));
  return queryParam;
};
