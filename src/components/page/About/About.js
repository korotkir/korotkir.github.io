import './About.css'
import AboutCard from '../../UI/AboutCard/AboutCard'

const About = () => {
  return (
    <main className='About'>
      <section className='About__about'>
        <h1>About</h1>
        <p>Web developer, with extensive knowledge and years of experience, working in web <br/> technologies and UI/UX design, delivering quality work.</p>

        <div className="About__card">
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>

      </section>
    </main>

  )
}

export default About
