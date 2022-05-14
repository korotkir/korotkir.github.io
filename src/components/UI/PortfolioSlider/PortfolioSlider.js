import './PortfolioSlider.css'
import {ReactComponent as Prev} from './slider/prev.svg'
import {ReactComponent as Next} from './slider/next.svg'
import {ReactComponent as Dot} from './slider/non-active.svg'
import {ReactComponent as ActiveDot} from './slider/active.svg'
import {useState} from 'react'
import StandardButton from '../Button/StandardButton/StandardButton'


const PortfolioSlider = (props) => {

  const [move, setMove] = useState(0)
  const [dotsState, setDotsState] = useState(0)

  const slidesStyles = {
    transform: `translateX(${move}px)`,
    transition: 'transform 0.5s'
  }

  let count = -Math.abs((props.data.length - 2) * 812)

  const nextSlideHandler = () => {
    setMove(move < count ? 0 : move - 812)
    // setDotsState(move == 0 ? 0 : dotsState + 1)
    setDotsState(move >= count ? dotsState + 1 : 0)
    console.log(count)
  }

  const prevSlideHandler = () => {
    setMove(move >= 0 ? count - 812 : move + 812)
    setDotsState(move == 0 ? 3 : dotsState - 1)
    console.log(move)
  }

  return (
      <div className="slider">
        <div className="slider__main">
          <Prev className="slider__prev" onClick={prevSlideHandler} />

          <div className="slider__slides">
            <div style={slidesStyles} className="container">

              {
                props.data.map((slide, i) => {
                  return (
                    <div key={i} className="slide">
                      <img className="slide__screen" src={slide.projectScreen}/>
                      <div className="slide__desc">
                        <h3 className="slide__head">{slide.projectName}</h3>
                        <p className="slide__info">{slide.projectDesc}</p>
                        <StandardButton>demo</StandardButton>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>




          <Next className="slider__next" onClick={nextSlideHandler}/>
        </div>
        <div className="slider__navDots">
          {
            props.data.map((el, i) => {
              return (i == dotsState ? <ActiveDot key={i} /> : <Dot key={i} />)
            })
          }

          {/*<Dot />*/}
          {/*<Dot />*/}
          {/*<Dot />*/}
          {/*<Dot />*/}
          {/*<ActiveDot />*/}
        </div>
      </div>
  )
}

export default PortfolioSlider
