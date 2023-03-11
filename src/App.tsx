import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/NavbarComponent';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyBlog from './pages/MyBlog';
import AboutMe from './pages/AboutMe';
import ResponseForm from './components/responseForm/ResponseForm';
import FooterComponent from './components/footer/FooterComponent';
import NavbarComponent from './components/navbar/NavbarComponent';
import Blogs from './pages/Blogs';
import { BlogsProvider } from './context/BlogsContext';

function App() {
  return (
    <div className="App">
     <BlogsProvider>
     <Header/>
      <NavbarComponent/>

        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/myblog' element={<MyBlog/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes> 

      <ResponseForm/>
      <FooterComponent/>
     </BlogsProvider>

    </div>
  );
}

export default App;
