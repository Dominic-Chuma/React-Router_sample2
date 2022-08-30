// import logo from './logo.svg';
import './App.css';

// Import Router & other pages that are to be routed to
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/layout/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}> 
          
            <Route index element={<Home/>} /> 
            <Route path='features' element={<Features/>} /> 
            <Route path='pricing' element={<Pricing/>} />
            {/* <Route path='*' element={<NoPage/>} /> */}
            
           
          {/* </Route> */}
          {/* Nest another set of routes*/}
          {/* <Route path='products' element={<Info/>} > */}
            
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
