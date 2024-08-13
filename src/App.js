//CSS Import
import './App.css';

//Components Import
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="container">
        <Hero />
        <Skills />
      </header>
    </div>
  );
}

export default App;
