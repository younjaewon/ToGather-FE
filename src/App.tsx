import React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/Header/HeaderNavigation';
import ModalProvider from './contexts/ModalContext';
import AuthRedirectPage from './pages/AuthRedirectPage';
import Test from './pages/Test';

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <HeaderNavigation />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/oauth/:social" element={<AuthRedirectPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
