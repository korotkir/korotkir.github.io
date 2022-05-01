import './Switch.css'
import {Transition} from 'react-transition-group'
import {useState} from 'react'

const defaultStyle = {
  margin: '4px 31px 6px 5px',
  //margin: 4px 5px 6px 25px
  width: 19,
  height: 19,
  borderRadius: 50,
  backgroundColor: '#5671A6'
}

const transitionStyle = {
  entering: { transform: 'translateX(21px)', transition: 'transform 0.1s' },
  entered: { transform: 'translateX(21px)' },
  exiting: { transform: 'translateX(21px)' },
  exited: { transform: 'translateX(0)', transition: 'transform 0.1s'},
};

const Switch = () => {
  const [switched, setSwitched] = useState(false)


  return (
  <div className='theme'>
    <Transition
      in={switched}
      timeout={100}
    >
      {state => <div
        style={{
          ...defaultStyle,
          ...transitionStyle[state]
        }}
        onClick={() => setSwitched(!switched)}
      />}
    </Transition>
  </div>
  )
}

export default Switch
