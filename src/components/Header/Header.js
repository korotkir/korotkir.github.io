import './Header.css'
import Menu from './Menu/Menu'
import {ReactComponent as MenuIcon} from '../../img/menu.svg'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {

  const [menu, setMenu] = useState(false)

  const adaptiveMenuHandler = () => {
    setMenu(!menu)
  }

  return (
    <header className="header">
      <div className="topBlock">
        <NavLink className="logo" to="/portfolio/main">Frontend Dev.</NavLink>
        <MenuIcon onClick={adaptiveMenuHandler} className="adaptive__menu"/>
      </div>
      {/*<Switch />*/}
      <Menu menu={menu}/>

    </header>
  )
}

export default Header
