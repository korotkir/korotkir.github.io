import './Header.css'

const Header = () => (
  <header className="header">
    <p className="header__logo" href="#">Snicks Picky</p>
    <ul className="header__menu">
      <li><a href="#">About</a></li>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Portfolio</a></li>
    </ul>
    <div className='header__theme'>
      <div className='header__circle' />
    </div>
  </header>
)

export default Header
