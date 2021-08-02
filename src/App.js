import Navigation from './components/Navigation'
import Jumbotron from './components/Jumbotron'
import Technologies from './components/Technologies'

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Jumbotron />
      </div>
      <Technologies />
    </div>
  );
}

export default App;
