import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Works from './components/Works';


import './App.css';

function App() {
  return (
    <Router>
<div className="app">
  <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/works" component={Works}/>
        <Route exact path="/contact" component={Contact}/>


      </Switch>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
