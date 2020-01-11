import React from 'react';

import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from 'react-icons/fa';

import style from './Sidebar.scss';

export const Sidebar = () => (
  <div className={style.sidebar} data-testid='sidebar'>
    <ul className={style.sidebarGeneric}>
      <li><span><FaInbox/></span><span> Inbox</span></li>
      <li><span><FaRegCalendarAlt/></span><span> Today</span></li>
      <li><span><FaRegCalendar/></span><span> Next 7 days</span></li>
    </ul>

    <div className={style.sidebarMiddle}>
      <span>
        <FaChevronDown/>
      </span>

      <ul className={style.sidebarProjects}>
        <p>Projects Will be Here!</p>
        <p>Add Projects Component</p>
      </ul>
    </div>
  </div>
);
