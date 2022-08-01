import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Flag } from '../Flag/index.flag';
import { context } from '../../Context/index.context';
import { stylessBtn } from '../../Theme/theme';
import { getBordersCountry } from '../../servicies/index.servicies';
import { DetailsInfo } from '../DetailsInfo/index.detailsInfo';
import './countryDetail.css';

export function CountryDetail() {
  const params = useParams();
  const [borderCounties, setBorderCountries] = useState([]);
  const { stateCountries, optionsTheme } = useContext(context);
  const country = stateCountries.countries.find((item) => item.name.official === params.id);
  const { styleLink } = stylessBtn(optionsTheme.theme);

  useEffect(() => async () => {
    if (!country.borders) return;
    const arrPromise = country.borders.map((item) => getBordersCountry(item));
    Promise.all(arrPromise).then((data) => {
      setBorderCountries(data);
    });
  }, []);

  return (
    <article className="detail">
      <Link to="/" className="detail__btn interactive" style={styleLink}>
        <AiOutlineArrowLeft />
        <span>Back</span>
      </Link>
      <div className="deatail__card">
        <Flag flagImg={country.flags.svg} />
        <DetailsInfo country={country} borderCounties={borderCounties} styleLink={styleLink} />
      </div>
    </article>
  );
}
