import './Qualifications.css'
import {ReactComponent as Work} from '../UI/Icons/work.svg'
import {ReactComponent as Educations} from '../UI/Icons/educations.svg'
import JobCard from '../UI/Cards/JobCard/JobCard'
import {useState} from 'react'

const Qualifications = (props) => {
  return (
  <section className="Qualifications">
    <div className="Qualifications__header">
      <h1>Qualifications</h1>
      <span>My personal journey</span>
    </div>


    <div className="Tabs">
      <div className="Tabs__header">
        <button
          className="Tabs__Education Tabs__button"
        >
          <Educations className="Tabs__icon"/>
          <span className="Tabs__title">Education</span>
        </button>
        <button
          className="Tabs__Work Tabs__button"
        >
          <Work className="Tabs__icon"/>
          <span className="Tabs__title">Work</span>
        </button>
      </div>
      <hr/>
      <div
        className="Tabs__education"
      >
        {
          props.education.map((el, i) => {
            return <JobCard
              key={i}
              position={el.position}
              location={el.location}
              organization={el.organization}
              years={el.years}
            />
          })
        }
      </div>
      <div
        className="Tabs__work"
      >
        {
          props.work.map((el, i) => {
            return <JobCard
              key={i}
              position={el.position}
              location={el.location}
              organization={el.organization}
              years={el.years}
            />
          })
        }
      </div>
    </div>


  </section>
  )
}

export default Qualifications
