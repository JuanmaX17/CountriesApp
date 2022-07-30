import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { context } from '../../Context/index.context';
import { stylessNav } from '../../Theme/theme';
import './navbar.css';

export function Navbar() {
  const { optionsTheme } = useContext(context);
  const { theme } = optionsTheme;
  const { styleIcon, styleNav } = stylessNav(theme);

  return (
    <nav className="nav" style={styleNav}>
      <Link className="nav__title" to="/">Where in the world</Link>
      <button className="nav__theme" onClick={optionsTheme.hadnleTheme} type="button">
        {
          theme === 'Dark'
            ? <BsFillSunFill className="nav__icon nav__icon-soon" style={styleIcon} />
            : <BsFillMoonFill className="nav__icon nav__icon-moon" style={styleIcon} />
        }
        <span className="nav__mode">Dark Mode</span>
      </button>
    </nav>
  );
}
