import Navigation from './components/Navigation'
import Jumbotron from './components/Jumbotron'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

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
    </div>
  );
}

export default App;
