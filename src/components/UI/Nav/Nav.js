import './Nav.css'

const Nav = (props) => (
  <li className="menu__item"><a className="menu__link" href={props.link}>{props.children}</a></li>
)

export default Nav
