import { useState } from 'react';
import Header from "./components/header";
import GetDistanceButton from './components/GetDistanceButton';
import './App.css'

function App() {
  return (
    <>
      <div>
        <Header />
        <GetDistanceButton />
      </div>
    </>
  )
}

export default App;
