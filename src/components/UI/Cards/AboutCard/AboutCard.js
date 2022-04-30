import './AboutCard.css'

const AboutCard = (props) => {
  const styles = String(props.total).length > 1 ? 'twoDigit' : 'oneDigit'

  return (
  <div className="AboutCard">
    <div className="AboutCard__stat">
      <div className="AboutCard__logo">{props.icon}</div>
      <span className="AboutCard__title">{props.text}</span>
    </div>
    <span className={`AboutCard__count ${styles}`}>{props.total}</span>
  </div>
  )
}

export default AboutCard
