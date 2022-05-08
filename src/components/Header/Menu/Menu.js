import './Menu.css'
import Nav from '../../UI/Nav/Nav'
import {useEffect} from 'react'

const Menu = (props) => {
  const styles = props.menu ? {display: 'flex'} : {display: 'none'}

  return (
    <nav>
      <ul
        className="menu"
        style={styles}
      >
        <Nav link={'#'} >About</Nav>
        <Nav link={'#'} >Skills</Nav>
        <Nav link={'#'} >Services</Nav>
        <Nav link={'#'} >Portfolio</Nav>
      </ul>
    </nav>
  )
}

export default Menu
