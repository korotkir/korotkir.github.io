import './CallToActionButton.css'

const CallToActionButton = (props) => (
  <button className="call">
    <span>{props.children}</span>
  </button>
)

export default CallToActionButton
