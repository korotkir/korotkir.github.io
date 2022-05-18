import "./Profile.css"
import profile from "./img/profile.svg"
import github_icon from './img/github_icon.svg'
import hh_icon from './img/hh_icon.svg'
import Social from '../UI/Social/Social'
import CallToActionButton from '../UI/Button/CallToAction/CallToActionButton'
import {AboutMe} from '../../Portfolio'

const Profile = (props) => {
  return (
    <section className="profile">
      <img className="profile__avatar" src={profile} alt="#"/>
      <div className="profile__info">
        <h1 className="profile__name">{AboutMe.name}</h1>
        <h2 className="profile__job">{AboutMe.carrier}</h2>
        <p className="profile__description">{AboutMe.brief}</p>
      </div>
      <div className="profile__social">
        <Social socialLink={'https://stupino.hh.ru/resume/ed77b543ff09ee210c0039ed1f657a71515a71'} icon={hh_icon}/>
        <Social socialLink='https://github.com/korotkir' icon={github_icon}/>
      </div>
      <a href="mailto:ekoroteev@ya.ru"><CallToActionButton>Написать мне!</CallToActionButton></a>
    </section>
  )
}

export default Profile
