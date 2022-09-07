import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App