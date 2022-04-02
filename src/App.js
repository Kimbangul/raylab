import React from 'react';

// router
import { Routes, Route } from 'react-router-dom';

// style
import GlobalStyle from 'styles/Globalstyle';
// components
import {Main} from 'pages/index';
// Layout
import {Header, Footer, TopBtn} from 'pages/Layout';

function App() {
  return (
    <div className="App">  
    <GlobalStyle />  
    <Header/>
      <Routes>
            <Route path="/" element={<Main />} />
      </Routes>
    <Footer/>
    <TopBtn/>
    </div>
  );
}

export default App;
