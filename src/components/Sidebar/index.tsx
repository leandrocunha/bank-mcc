import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list__item">
            <Link className="navigation__list__item__link" to="/">Home</Link>
          </li>
          <li className="navigation__list__item">
            <Link className="navigation__list__item__link" to='/applications'>Applications</Link>
          </li>
          <li className="navigation__list__item">
            <Link className="navigation__list__item__link" to='/configurations'>Configurations</Link>
          </li>
          <li className="navigation__list__item">
            <Link className="navigation__list__item__link" to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}