import React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ModalProvider from './contexts/ModalContext';
import KakaoAuthPage from './pages/KakaoAuthPage';
import Test from './pages/test';

const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/oauth/kakao" element={<KakaoAuthPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;
