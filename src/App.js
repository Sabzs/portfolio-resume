import React from 'react';
import NavBar from './Components/NavBar';
import './Styles/App.css';


function App() {
  return (
    <div className="App">
      <div className="App__sidebar" >
        <NavBar />
      </div>
      <div className="App__main-content" ></div>
    </div>
  );
}

export default App;
