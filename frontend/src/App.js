import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Home/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
