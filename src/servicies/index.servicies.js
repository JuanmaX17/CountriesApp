const API = 'https://restcountries.com/v3.1/';

export function getSearch(name) {
  return fetch(`${API}/name/${name}`)
    .then((res) => {
      if (res.status === 404) return [];
      return res.json();
    })
    .then((data) => data);
}

export function getCountry(name) {
  return fetch(`${API}/name/${name}?fullText=true`)
    .then((res) => {
      if (res.status === 404) return [];
      return res.json();
    })
    .then((data) => data);
}

export function getBordersCountry(nameCode) {
  return fetch(`${API}/alpha/${nameCode}`)
    .then((res) => {
      if (res.status === 404) return [];
      return res.json();
    })
    .then((data) => data);
}
