import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NewsList from './components/NewsList';


const App = () => {
 
  return (
    <div className="App">
      <NewsList/>

    </div>
  );
};

export default App;
