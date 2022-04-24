import './Header.css'
import Switch from '../UI/Switch/Switch'
import Nav from '../UI/Nav/Nav'

const Header = () => (
  <header className="header">
    <p className="logo" href="#">Snicks Picky</p>
    <nav>
      <ul className="menu">
        <Nav name={'About'} link={'#'} />
        <Nav name={'Skills'} link={'#'} />
        <Nav name={'Services'} link={'#'} />
        <Nav name={'Portfolio'} link={'#'} />
      </ul>
    </nav>
    <Switch />
  </header>
)

export default Header
