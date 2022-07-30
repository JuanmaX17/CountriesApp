const API = 'https://restcountries.com/v3.1/name';

export function getSearch(name) {
  return fetch(`${API}/${name}`)
    .then((res) => {
      if (res.status === 404) return [];
      return res.json();
    })
    .then((data) => data);
}

export function getCountry(name) {
  return fetch(`${API}/${name}fullText=true`)
    .then((res) => {
      if (res.status === 404) return [];
      return res.json();
    })
    .then((data) => data);
}
