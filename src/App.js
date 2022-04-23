import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import About from './components/page/About/About'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='container'>
        <Profile />
        <About />
      </main>
    </div>
  );
}

export default App;
