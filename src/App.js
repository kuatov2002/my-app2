import React from 'react';
import Suggestions from './components/Suggestions';
import TagsForm from './components/TagsForm';
import InputForm from './components/InputForm';
import Overall from './components/Overall';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import base from'./base.png'

const App = () => {
  return (
    
    <BrowserRouter>
    
    <header style={{ position: 'absolute', top: 70, left:200 }}>
      <a id='problemBase' style={{ display: 'flex', alignItems: 'center' }} href='base'>
        <img src={base} alt="Base" width={39} />
        <span style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 400, lineHeight: '16px', textAlign: 'left', marginLeft: 10 }}>Problem Base</span>
      </a>
    </header>
    <Routes>
      
      <Route path='Tags' element={<TagsForm />}/>
      <Route path='Input' element={<InputForm />}/>
      <Route path='Suggestions' element={<Suggestions/>}/>
      <Route path='Overall' element={<Overall/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default App;