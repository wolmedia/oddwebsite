
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import 'animate.css';
import './assets/main.css'
import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';

import Layout from "./components/Layout";
import Inicio from './components/pages/Inicio';
import Development from './components/pages/development';
import Seo from './components/pages/seo';
import Tagging from './components/pages/tagging';






function root() {
  return (
    <Layout>
    <BrowserRouter basename="/">

    <Routes>
    <Route path="/tagging" Component={Tagging} />
    <Route path="/Seo" Component={Seo} />
    <Route path="/Development" Component={Development} />
    <Route path="/" Component={Inicio} />

    
    </Routes>
   </BrowserRouter>
    </Layout>

   
    
    
  );
}

export default root;



