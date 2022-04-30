import './Qualifications.css'
import {ReactComponent as Work} from '../UI/Icons/work.svg'
import {ReactComponent as Educations} from '../UI/Icons/educations.svg'
import JobCard from '../UI/Cards/JobCard/JobCard'

const Qualifications = () => (
  <section className="Qualifications">
    <div className="Qualifications__header">
      <h1>Qualifications</h1>
      <span>My personal journey</span>
    </div>


    <div className="Tabs">
      <div className="Tabs__header">
        <button>
          <Educations className="Tabs__icon"/>
          <span className="Tabs__title">Education</span>
        </button>
        <button>
          <Work className="Tabs__icon"/>
          <span className="Tabs__title">Work</span>
        </button>
      </div>
      <hr />
      <div className="Tabs__work">
        <JobCard className="Tabs__card" />
        <JobCard className="Tabs__card" />
        <JobCard className="Tabs__card" />
        <JobCard className="Tabs__card" />
        <JobCard className="Tabs__card" />
      </div>

    </div>



  </section>
)

export default Qualifications
