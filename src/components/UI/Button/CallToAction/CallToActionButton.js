import './CallToActionButton.css'
import icon from './img/message.svg'

const CallToActionButton = (props) => (
  <button className="call">
    {props.action}
    <img className="callIcon" src={icon} />
  </button>
)

export default CallToActionButton
