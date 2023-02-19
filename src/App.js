import './App.css';
import Header from './containers/header/Header'
import About from './containers/about/About'
import Projects from './containers/projects/Projects'
import Skills from './containers/skills/Skills'
import Contact from './containers/contact/Contact'
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="homepage__container">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;