import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
    </div>
  );
}

export default App;
