import React, {useEffect} from 'react';

// router
import { Routes, Route } from 'react-router-dom';

// components
import {Main} from 'pages/index';

// style
import GlobalStyle from 'styles/Globalstyle';
import styled from 'styled-components';
// wow
import WOW from 'wowjs';

// Layout
import {Header, Footer, TopBtn} from 'pages/Layout';


const StyledApp = styled.div`
  & #top-btn{
    position: fixed;
    bottom: 35px;
    right: 50px;
  }  
`;

function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  
  }, []);
  return (
    <StyledApp className="App">  
      <GlobalStyle />  
      <Header/>
        <Routes>
              <Route path="/" element={<Main />} />
        </Routes>
      <Footer/>
      <TopBtn/>
    </StyledApp>
  );
}

export default App;
