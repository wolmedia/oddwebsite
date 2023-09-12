
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
import Seo from './components/pages/Seo';
import Tagging from './components/pages/tagging';
import Atl from './components/pages/atl';
import Ddigital from './components/pages/Ddigital';
import Informatica from './components/pages/informatica';




function root() {
  return (
    <BrowserRouter basename="/">
    <Layout>
    

    <Routes>
    <Route path="/informatica" element={<Informatica />} />
    <Route path="/data-digital" element={<Ddigital />} />
    <Route path="/atl" element={<Atl />} />
    <Route path="/tagging" element={<Tagging />} />
    <Route path="/seo" element={<Seo />} />
    <Route path="/development" element={<Development />} />
    <Route path="/" element={<Inicio />} />
    </Routes>
   
    </Layout>
    </BrowserRouter>
  );
}

export default root;



