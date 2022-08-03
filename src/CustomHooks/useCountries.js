import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountry } from '../servicies/index.servicies';

export function useCountries({ countries, handlesetCountry }) {
  const params = useParams();
  if (countries.length > 0) {
    const country = countries.find((item) => item.name.official === params.id);
    return [country, false];
  }
  useEffect(() => {
    getCountry(params.id).then((data) => {
      handlesetCountry(data, () => {});
    });
  }, []);
  return [[], true];
}
