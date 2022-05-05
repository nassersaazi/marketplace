import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Home/>
    </Router>
    </div>
  );
}

export default App;
