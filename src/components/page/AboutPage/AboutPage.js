import './AboutPage.css'
import About from '../../About/About'
import Qualifications from '../../Qualifications/Qualifications'
import {AboutCard, EducationCard, WorkCard} from '../../../Portfolio'

const AboutPage = (props) => {
  return (
    <main className="AboutPage">
      <About items={AboutCard}/>
      <Qualifications
        education={EducationCard}
        work={WorkCard}
      />
    </main>
  )
}

export default AboutPage
