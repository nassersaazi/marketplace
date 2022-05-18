import {  Routes, Route } from 'react-router-dom';
import { Header ,Home ,Services, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/services" element={<Services />} />
    </Routes>
    </div>
  );
}

export default App;
