import './Menu.css'
import Nav from '../../UI/Nav/Nav'

const Menu = (props) => {

  const deviceWidth = window.screen.width >= 1000
  const styles = props.menu || deviceWidth ? {display: 'flex'} : {display: 'none'}

  return (
    <nav>
      <ul
        className="menu"
        style={styles}
      >
        <Nav link={'/'}>About</Nav>
        <Nav link={'/skills'}>Skills</Nav>
        <Nav link={'/services'}>Services</Nav>
        <Nav link={'/portfolio'}>Portfolio</Nav>
      </ul>
    </nav>
  )
}

export default Menu
