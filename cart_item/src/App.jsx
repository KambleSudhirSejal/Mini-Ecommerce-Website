import React from 'react';
import Layout from './components/layout'
import Home from './pages/Home';
import Detail from './pages/Detail';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path='/:slug' element={<Detail/>} />

      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
