//CSS Import
import './App.css';

//Components Import
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="container">
        <Hero />
      </header>
    </div>
  );
}

export default App;
