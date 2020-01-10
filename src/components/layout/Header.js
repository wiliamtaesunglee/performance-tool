import React from 'react';

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
          <li>Pizza Slice</li>
        </ul>
      </div>
    </nav>
  </header>
);

