import Navigation from './components/Navigation'
import Jumbotron from './components/Jumbotron'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
      <Navigation />

      <div className="container">
        <Jumbotron />
      </div>

      <Technologies />

      <div className="container">
        <Projects />
      </div>

      <AboutMe />

    </div>
  );
}

export default App;
