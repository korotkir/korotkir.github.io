import './PortfolioSlider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from './screens/todo.png'

const PortfolioSlider = () => {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // }

  return (
    <div className="PortfolioSlider">
      <Carousel>

        <div className="slide">
          <div className="slide__screen">
            <img src={slide1} alt="todo list"/>
          </div>
          <div className="slide__desc">
            <h2>ToDo List!</h2>
            <p>
              afafadd expedita illum in labore laborum nesciunt nostrum odit qui, quia quibusdam repellendus reprehenderit!
            </p>
          </div>
        </div>

      </Carousel>
    </div>
  )
}

export default PortfolioSlider
