import './AboutCard.css'
import fire from './img/fire.svg'

const AboutCard = () => (
  <div className="AboutCard">
    <img className="AboutCard__icon" src={fire}/>
    <div className="AboutCard__stat">
      <span className="AboutCard__title">Year <br/> experience</span>
      <span className="AboutCard__count">6</span>
    </div>
  </div>
)

export default AboutCard
