import './PortfolioPage.css'
import PortfolioSlider from '../../UI/PortfolioSlider/PortfolioSlider'

const PortfolioPage = () => (
  <div className={"PortfolioPage"}>
    <h1 className={"PageTitle"}>Portfolio</h1>
    <span className={"PageDesc"}>My recent Work</span>
    <PortfolioSlider />
    <footer>
      <h2 className={"FooterHeader"}>You have a new project?</h2>
      <p className={"FooterDesc"}>Contact me now nad get special price on your project</p>
    </footer>
  </div>
)

export default PortfolioPage
