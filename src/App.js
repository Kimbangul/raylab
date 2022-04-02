import React from 'react';

// router
import { Routes, Route } from 'react-router-dom';

// components
import {Main} from 'pages/index';

// style
import GlobalStyle from 'styles/Globalstyle';
import styled from 'styled-components';

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
