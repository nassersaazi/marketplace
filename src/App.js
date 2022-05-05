import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Discover from './components/Discover';
import Trending from './components/Trending';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Login/>
      <Home/>
      <Trending/>
      <Discover/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
