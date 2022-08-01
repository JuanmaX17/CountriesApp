import React, { useContext } from 'react';
import { context } from '../../Context/index.context';
import { stylessFoot } from '../../Theme/theme';
import './footer.css';

export function Footer() {
  const { theme } = useContext(context).optionsTheme;
  const { styleFooter } = stylessFoot(theme);
  return (
    <footer className="footer" style={styleFooter}>
      <p>Create by Juan Manuel Vargas and UI/UX by Fronted Mentor</p>
    </footer>
  );
}
