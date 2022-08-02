/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../../Context/index.context';
import { stylessBtn } from '../../Theme/theme';
import { Loading } from '../Loading/index.loading';
import './borderCountry.css';

function handleBorder(navigateTo, handleCountryShow, countryBorder, hadnleFilter) {
  navigateTo('/');
  hadnleFilter(false);
  handleCountryShow(countryBorder);
}
// eslint-disable-next-line react/prop-types
export function BorderCountry({ borderCounties, loading }) {
  const navigateTo = useNavigate();
  const { optionsTheme, handleCountryShow, hadnleFilter } = useContext(context);
  const { styleLink } = stylessBtn(optionsTheme.theme);
  return (
    <div className="detail__borderCountries">
      <p className="detail___borderSubTitle">Border Countries</p>
      <div className="detail__borders">
        {
          loading && <Loading />
        }
        {
          borderCounties.map((item) => (
            <button
              type="button"
              key={item[0].name.common}
              style={styleLink}
              className="detail__btn detail__border interactive"
              onClick={() => handleBorder(navigateTo, handleCountryShow, item, hadnleFilter)}
            >
              {item[0].name.common}
            </button>
          ))
        }
        {
          (borderCounties.length === 0 && !loading) && <span>without borders</span>
        }
      </div>
    </div>
  );
}
