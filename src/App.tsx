
import React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/Header/HeaderNavigation';
import ModalProvider from './contexts/ModalContext';

const App = () => {
  return (
    <>
      <ModalProvider>
        <HeaderNavigation />
      </ModalProvider>
    </>
  );
};

export default App;


