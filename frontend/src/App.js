import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
