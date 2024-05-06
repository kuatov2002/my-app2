import React from 'react';
import InputForm from './components/InputForm';
import TagsForm from './components/TagsForm';
import Suggestions from './components/Suggestions';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import base from'./base.png'

const App = () => {
  return (
    
    <BrowserRouter>
    
    <header style={{ position: 'fixed', top: 70 }}>
      <div id='problemBase' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={base} alt="Base" width={39} />
        <span style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 400, lineHeight: '16px', textAlign: 'left', marginLeft: 10 }}>Problem Base</span>
      </div>
    </header>
    <Routes>
      
      <Route index element={<TagsForm />}/>
      <Route path='Input' element={<InputForm />}/>
      <Route path='Suggestions' element={<Suggestions/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default App;