import './Header.css'
import Switch from '../UI/Switch/Switch'
import Nav from '../UI/Nav/Nav'
import Menu from './Menu/Menu'
import {ReactComponent as MenuIcon} from '../../img/menu.svg'
import {useState} from 'react'

const Header = () => {

  const [menu, setMenu] = useState(false)

  console.log('menu: ', menu)

  const adaptiveMenuHandler = () => {
    setMenu(!menu)
  }

  return (
    <header className="header">
      <div className="topBlock">
        <p className="logo" href="#">Snicks Picky</p>
        <MenuIcon onClick={adaptiveMenuHandler} className="adaptive__menu"/>
      </div>
      {/*<Switch />*/}
      <Menu menu={menu}/>

    </header>
  )
}

export default Header
