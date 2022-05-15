import './Qualifications.css'
import {ReactComponent as Work} from '../UI/Icons/work.svg'
import {ReactComponent as Educations} from '../UI/Icons/educations.svg'
import JobCard from '../UI/Cards/JobCard/JobCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';

const Qualifications = (props) => {
  return (
  <section className="Qualifications">
    <div className="Qualifications__header">
      <h1>Квалификация</h1>
      <span>Мой личный путь</span>
    </div>

    <Tabs
      className="Tabs">
      <TabList className="Tabs__header">

        <Tab
          className="Tabs__Education Tabs__button"
        >
          <Educations className="Tabs__icon"/>
          <span className="Tabs__title">Обучение</span>
        </Tab>

        <Tab
          className="Tabs__Work Tabs__button"
        >
          <Work className="Tabs__icon"/>
          <span className="Tabs__title">Работа</span>
        </Tab>

      </TabList>
      <hr/>

      <TabPanel className="Tabs__education">
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
      </TabPanel>
      <TabPanel className="Tabs__work">
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
      </TabPanel>

    </Tabs>


  </section>
  )
}

export default Qualifications
