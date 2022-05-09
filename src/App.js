import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import AboutPage from './components/page/AboutPage/AboutPage'
import {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState({})
  const user = 'korotkir'

  useEffect(() => {
    const getGithub = async () => {
      await fetch(`https://api.github.com/users/${user}`, {
        headers: {
          authorization: "token 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"
        }
      })
        .then((data) => {
          return data.json()
        })
        .then((data) => setData(data))
    }

    getGithub()
      .catch((e) => console.log(e))

    console.log(data)
  }, [])



  return (
    <div className="App">
      <Header />
      <main className='container'>
        <Profile ghLink={data.html_url}/>
        <AboutPage publicRepos={data.public_repos} />
      </main>
    </div>
  );
}

export default App;
