import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import First from './first';
import Second from './second';
import Third from './third';
import Fourth from './fourth';
import Fifth from './fifth';
import Sixth from './sixth';


function App() {
  return (
   <>
    <div>
    <First/>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
      {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<First/>}/>
            <Route path='/' element={<Second/>}/>
            <Route path='/' element={<Third/>}/>
         

        </Routes>
      </BrowserRouter> */}
    </div>
   </>
  );
}

export default App;
