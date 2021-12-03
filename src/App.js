import React, { useState, useEffect} from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Header from './Components/Header';
import {css} from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader';
import reactDom from 'react-dom';

function App() {

  const[loading, setLoading] = useState(false);
  const override = css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])
  return (
    <div className="App">
      
      {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40}/>
        :
        <>
        <NavBar />
        <Header />
        </>  
      }

    </div>
  );
}

export default App;
