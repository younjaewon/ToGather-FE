import React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HeaderNavigation from './components/Header/HeaderNavigation';
import ModalProvider from './contexts/ModalContext';
import KakaoAuthPage from './pages/KakaoAuthPage';
import NaverAuthPage from './pages/NaverAuthPage';
import Test from './pages/test';

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <HeaderNavigation />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/oauth/kakao" element={<KakaoAuthPage />} />
          <Route path="/oauth/naver" element={<NaverAuthPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
