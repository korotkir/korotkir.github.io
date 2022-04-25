import './CallToActionButton.css'
import icon from './img/message.svg'

const CallToActionButton = (props) => (
  <button className="call">
    <span>{props.action}</span>
  </button>
)

export default CallToActionButton
