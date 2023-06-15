const BASE_URL = 'https://api.tvmaze.com';

//not able to use ${} simple so trimmed trim() use to trim %20 from url
const apiGet = async queryString => {
  // throw new Erorr('Somethig bad Happen')
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const searchforshow = query => {
  return apiGet(`/search/shows?q=${query}`);
};
