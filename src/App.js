import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import AboutPage from './components/page/AboutPage/AboutPage'
import {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import PortfolioPage from './components/page/PortfolioPage/PortfolioPage'
import ServicesPage from './components/page/ServicesPage/ServicesPage'
import SkillsPage from './components/page/SkillsPage/Skills Page'
import NotFound from './components/NotFound/NotFound'

const clientID = process.env.REACT_APP_GH_TOKEN
const user = 'korotkir'

function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    const getGithub = async () => {
      await fetch(`https://api.github.com/users/${user}`, {
        headers: {
          authorization: `token ${clientID}`
        }
      })
        .then((data) => {
          return data.json()
        })
        .then((data) => setData(data))
    }

    getGithub()
      .catch((e) => console.log(e))

  }, [])



  return (
    <div className="App">
      <Header />
      <main className='container'>
        <Profile ghLink={data.html_url}/>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path={"/"} element={<AboutPage publicRepos={data.public_repos} />} />
          <Route path={"/my-portfolio"} element={<PortfolioPage />} />
          {/*<Route path={"/services"} element={<ServicesPage />} />*/}
          {/*<Route path={"/skills"} element={<SkillsPage />} />*/}
        </Routes>
      </main>
    </div>
  );
}

export default App;
