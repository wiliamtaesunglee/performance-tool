import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

import style from './Header.scss';

export const Header = () => (
  <header className={style.header} data-testid="header">
    <nav>
      <div className={style.logo}>
        <img src="/images/logo.png" alt='logo'/>
      </div>

      <div className={style.settings}>
        <ul>
          <li>+</li>
          <li>
            <FaPizzaSlice/>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

