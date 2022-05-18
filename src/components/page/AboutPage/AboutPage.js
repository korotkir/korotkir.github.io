import './AboutPage.css'
import About from '../../About/About'
import Qualifications from '../../Qualifications/Qualifications'
import {AboutCard, CourseCard, EducationCard, WorkCard} from '../../../Portfolio'

const AboutPage = (props) => {
  return (
    <main className="AboutPage">
      <About items={AboutCard}/>
      <Qualifications
        education={EducationCard}
        work={WorkCard}
        course={CourseCard}
      />
    </main>
  )
}

export default AboutPage
