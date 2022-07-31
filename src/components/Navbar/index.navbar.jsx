import React, { useContext } from 'react';
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
      <a className="nav__title" href="/">Where in the world</a>
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
