import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/Header/HeaderNavigation';

const App = () => {
  return (
    <>
      <HeaderNavigation />
    </>
  );
};

export default App;
