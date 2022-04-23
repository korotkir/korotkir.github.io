import './Header.css'
import Switch from '../UI/Switch/Switch'

const Header = () => (
  <header className="header">
    <p className="logo" href="#">Snicks Picky</p>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Skills</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Portfolio</a></li>
    </ul>
    <Switch />
  </header>
)

export default Header
