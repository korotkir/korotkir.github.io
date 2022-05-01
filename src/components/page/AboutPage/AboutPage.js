import './AboutPage.css'
import About from '../../About/About'
import Qualifications from '../../Qualifications/Qualifications'
import {ReactComponent as Books} from '../../UI/Icons/fire.svg'
import {ReactComponent as Fire} from '../../UI/Icons/fire.svg'
import {ReactComponent as Home} from '../../UI/Icons/home.svg'

const AboutPage = () => {

  const AboutCard = [
    {icon: <Fire />, title: 'Years experience', total: 20},
    {icon: <Books />, title: 'Completed projects', total: 6},
    {icon: <Home />, title: 'Companies worked', total: 4},
  ]

  const EducationCard = [
    {position: 'Computer Engineer', location: 'Peru', organization: 'University', years: '2009 - 2014'},
    {position: 'Web Design', location: 'Spain', organization: 'Institute', years: '2014 - 2017'},
    {position: 'Web Development', location: 'Peru', organization: 'Institute', years: '2017 - 2019'},
    {position: 'Master UI/UX', location: 'Peru', organization: 'Institute', years: '2019 - 2021'},
  ]

  const WorkCard = [
    {position: 'Software Engineer', location: 'Peru', organization: 'Microsoft', years: '2016 - 2018'},
    {position: 'Frontend Developer', location: 'Spain', organization: 'Apple Inc', years: '2018 - 2020'},
    {position: 'UI Designer', location: 'Spain', organization: 'Figma', years: '2017 - 2019'}
  ]

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
