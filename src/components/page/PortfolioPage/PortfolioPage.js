import './PortfolioPage.css'
import PortfolioSlider from '../../UI/PortfolioSlider/PortfolioSlider'
import slide1 from '../../UI/PortfolioSlider/screens/todo.png'

const PortfolioPage = () => {

  const yourPortfolio = [
    {
      projectName: 'Slide 1',
      projectDesc: 'Website adaptable to all devices, with UI components and animated interactions. lorepsium',
      projectScreen: slide1
    },
    {
      projectName: 'Slide 2',
      projectDesc: 'Website adaptable to all devices, with UI components and animated interactions. lorepsium',
      projectScreen: slide1
    },
    {
      projectName: 'Slide 3',
      projectDesc: 'Website adaptable to all devices, with UI components and animated interactions. lorepsium',
      projectScreen: slide1
    },
    {
      projectName: 'Slide 4',
      projectDesc: 'Website adaptable to all devices, with UI components and animated interactions. lorepsium',
      projectScreen: slide1
    },
  ]

  return (
  <div className={"PortfolioPage"}>
    <div className="PageHeader">
      <h1 className={"PageTitle"}>Portfolio</h1>
      <span className={"PageDesc"}>My recent Work</span>
    </div>
    <PortfolioSlider data={yourPortfolio} />
    <footer>
      <h2 className={"FooterHeader"}>You have a new project?</h2>
      <p className={"FooterDesc"}>Contact me now nad get special price on your project</p>
    </footer>
  </div>
  )
}

export default PortfolioPage
