import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css"; 
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div>
      {/* End of Intro */}

      {/* Ternding Section */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* End of Ternding */}

      {/* Ternding Section */}
      <div className='superHero'>
        <Superhero/>
      </div>
      {/* End of Ternding */}
    </div>
  );
}

export default App;
