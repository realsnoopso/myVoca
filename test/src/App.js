import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Nopage from './pages/Nopage';
import styled from "styled-components";

function App() {
  
  return (  
    <div className="App">
      <Header>
        <Link to="/">MY VOCA</Link>
      </Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/add" element={<Add />}/>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

const Header = styled.div`
  font-size: 16px;
  text-align: left;
  padding: 24px 24px;
  background-color: tranparent;
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  font-weight: 800;
`;

export default App;