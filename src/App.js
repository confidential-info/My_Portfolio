//CSS Import
import './App.css';

//Components Import
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </header>
      <Footer />
    </div>
  );
}

export default App;
