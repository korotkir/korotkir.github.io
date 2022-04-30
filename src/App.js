import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import AboutPage from './components/page/AboutPage/AboutPage'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        <Profile />
        <AboutPage />
      </main>
    </div>
  );
}

export default App;
