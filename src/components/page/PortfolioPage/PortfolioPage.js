import './PortfolioPage.css'
import PortfolioSlider from '../../UI/PortfolioSlider/PortfolioSlider'
import {yourPortfolio} from '../../../Portfolio'

const PortfolioPage = () => {



  return (
  <div className={"PortfolioPage"}>
    <div className="PageHeader">
      <h1 className={"PageTitle"}>Портфолио</h1>
      <span className={"PageDesc"}>Мои последние работы</span>
    </div>
    <PortfolioSlider className={"PageSlider"} data={yourPortfolio} />
    <footer>
      <h2 className={"FooterHeader"}></h2>
      <p className={"FooterDesc"}></p>
    </footer>
  </div>
  )
}

export default PortfolioPage
