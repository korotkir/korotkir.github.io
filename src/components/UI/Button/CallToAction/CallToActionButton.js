import './CallToActionButton.css'

const CallToActionButton = (props) => (
  <button className="call">
    <span>{props.action}</span>
  </button>
)

export default CallToActionButton
