import Navigation from './components/Navigation'
import Jumbotron from './components/Jumbotron'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navigation />
      <div className="container offset-md-1">
        <Jumbotron />
      </div>
      <Technologies />
      <div className="container offset-md-1">
        <Projects />
      </div>
    </div>
  );
}

export default App;
