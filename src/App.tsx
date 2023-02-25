import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyBlog from './pages/MyBlog';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>

        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/myblog' element={<MyBlog/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
      </Routes> 

    </div>
  );
}

export default App;
