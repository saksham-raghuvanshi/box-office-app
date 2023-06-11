const BASE_URL = 'https://api.tvmaze.com';

//not able to use ${} simple so trimmed trim() use to trim %20 from url
const apiGet = async queryString => {
  const trimqueryString = queryString.trim();
  const response = await fetch(BASE_URL + trimqueryString);
  const body = await response.json();
  return body;
};

export const searchforshow = query => {
  const trimmedquery = query.trim();
  return apiGet('/search/shows?q=' + trimmedquery);
};
