/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { stylessBtn } from '../../Theme/theme';
import { DetailsInfo } from '../DetailsInfo/index.detailsInfo';
import { Flag } from '../Flag/index.flag';
import { getBordersCountry } from '../../servicies/index.servicies';

// eslint-disable-next-line react/prop-types
export function Detail({ country, optionsTheme }) {
  const [loading, setLoading] = useState(true);
  const [borderCounties, setBorderCountries] = useState([]);
  const { styleLink } = stylessBtn(optionsTheme.theme);
  useEffect(() => {
    if (!country.borders) {
      setLoading(false);
      return;
    }
    const arrPromise = country.borders.map((item) => getBordersCountry(item));
    Promise.all(arrPromise).then((data) => {
      setLoading(false);
      setBorderCountries(data);
    });
  }, []);
  return (
    <>
      <Link to="/" className="detail__btn interactive" style={styleLink}>
        <AiOutlineArrowLeft />
        <span>Back</span>
      </Link>
      <div className="deatail__card">
        <Flag flagImg={country?.flags?.svg} />
        <DetailsInfo country={country} borderCounties={borderCounties} loading={loading} />
      </div>
    </>
  );
}
