import './About.css'
import AboutCard from '../UI/Cards/AboutCard/AboutCard'


const About = (props) => (
  <section className='About__about'>
    <h1>About</h1>
    <p>Web developer, with extensive knowledge and years of experience, working in web <br/> technologies and UI/UX design, delivering quality work.</p>

    <div className="About__card">
      {
        props.items.map((el, i) => {
          return <AboutCard key={i} icon={el.icon} text={el.title} total={el.total} />
        })
      }
    </div>

  </section>
)

export default About
