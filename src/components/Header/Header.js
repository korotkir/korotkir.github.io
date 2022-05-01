import './Header.css'
import Switch from '../UI/Switch/Switch'
import Nav from '../UI/Nav/Nav'

const Header = () => (
  <header className="header">
    <p className="logo" href="#">Snicks Picky</p>
    <nav>
      <ul className="menu">
        <Nav link={'#'} >About</Nav>
        <Nav link={'#'} >Skills</Nav>
        <Nav link={'#'} >Services</Nav>
        <Nav link={'#'} >Portfolio</Nav>
      </ul>
    </nav>
    <Switch />
  </header>
)

export default Header
