import "./Profile.css"
import profile from "./img/profile.svg"
import insta_icon from './img/insta_icon.svg'
import twitter_icon from './img/twitter_icon.svg'
import vk_icon from './img/vk_icon.svg'
import facebook_icon from './img/facebook_icon.svg'
import github_icon from './img/github_icon.svg'

const Profile = () => {
  return (
    <section className="profile">
      <img className="profile__avatar" src={profile} alt="#"/>
      <div className="profile__info">
        <h1 className="profile__name">Koroteev Kirill</h1>
        <h2 className="profile__job">Frontend Developer</h2>
        <p className="profile__description">High level experience<br/>in web design and<br/>development<br/>knowledge.</p>
      </div>
      <div className="profile__social">
        <a href=""><img src={insta_icon} alt=""/></a>
        <a href=""><img src={twitter_icon} alt=""/></a>
        <a href=""><img src={vk_icon} alt=""/></a>
        <a href=""><img src={facebook_icon} alt=""/></a>
        <a href=""><img src={github_icon} alt=""/></a>
      </div>
      <button className="profile_call">Contact Me</button>
    </section>
  )
}

export default Profile
