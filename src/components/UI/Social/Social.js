import './Social.css'

const Social = (props) => (
  <a className='socialItem'
     href={props.socialLink}
  >
    <img
      src={props.icon}
      alt="social"/>
  </a>
)

export default Social
