// import logo from './logo.svg';
import './App.css';

// Import Router & other pages that are to be routed to
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/layout/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import FooterDiv from './pages/layout/footer';



function App() {
  return (
    <div className="App">

      {/* Initial Div - Start */}
      <div className='initial-div'>

      </div>
      {/* Initial Div - End */}

      {/* Navigation Start.... */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}> 
          
            <Route index element={<Home/>} /> 
            <Route path='team' element={<Team/>} /> 
            <Route path='contact' element={<Contact/>} />
            {/* <Route path='*' element={<NoPage/>} /> */}
            
           
          {/* </Route> */}
          {/* Nest another set of routes*/}
          {/* <Route path='products' element={<Info/>} > */}
            
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Navigation End.... */}

      {/* Footer Start.... */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FooterDiv/>}> 
          
            <Route index element={<Home/>} /> 
            <Route path='team' element={<Team/>} /> 
            <Route path='contact' element={<Contact/>} />
            {/* <Route path='*' element={<NoPage/>} /> */}
            
           
          {/* </Route> */}
          {/* Nest another set of routes*/}
          {/* <Route path='products' element={<Info/>} > */}
            
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Footer End.... */}

    </div>
  );
}

export default App;
