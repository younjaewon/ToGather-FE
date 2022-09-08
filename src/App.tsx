import React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/Header/HeaderNavigation';
import ModalProvider from './contexts/ModalContext';
import KakaoAuthPage from './pages/KakaoAuthPage';
import Test from './pages/test';

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <HeaderNavigation />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/oauth/kakao" element={<KakaoAuthPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};


export default App;

