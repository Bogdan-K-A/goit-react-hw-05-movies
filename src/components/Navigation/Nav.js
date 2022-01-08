import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

export const Nav = () => {
  return (
    <div>
      <ul className={s.Text}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.NavLink}
            activeClassName={s.NavLink_Active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={s.NavLink}
            activeClassName={s.NavLink_Active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
