import './JobCard.css'
import {ReactComponent as Date} from '../../Icons/date.svg'

const JobCard = (props) => (
  <div className="JobCard">
    <h4 className="JobCard__title">{props.position}</h4>
    <div className="JobCard__info">
      <div className="JobCard__location">{`${props.organization}`}</div>
      <span className="JobCard__years">
        <Date className="JobCard__icon"/>
        {props.years}
      </span>
    </div>
  </div>
)

export default JobCard
