import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { context } from '../../Context/index.context';
import { stylessNav } from '../../Theme/theme';
import './navbar.css';

export function Navbar() {
  const { optionsTheme } = useContext(context);
  const { theme } = optionsTheme;
  const { styleIcon, styleNav } = stylessNav(theme);
  const mode = theme === 'Dark' ? 'Ligth mode' : 'Dark mode';

  return (
    <nav className="nav" style={styleNav}>
      <a className="nav__title" href="/">Where in the world is</a>
      <button className="nav__theme" onClick={optionsTheme.hadnleTheme} type="button">
        {
          theme === 'Dark'
            ? <BsFillSunFill className="nav__icon nav__icon-soon" style={styleIcon} />
            : <BsFillMoonFill className="nav__icon nav__icon-moon" style={styleIcon} />
        }
        <span className="nav__mode">{mode}</span>
      </button>
    </nav>
  );
}
