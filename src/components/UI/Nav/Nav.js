import './Nav.css'
import {NavLink} from 'react-router-dom'

const Nav = (props) => (
  <li className="menu__item"><NavLink className="menu__link" to={props.link}>{props.children}</NavLink></li>
)

export default Nav
