import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";




const App = () => {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div >
        <Body/>
      </div>
    </div>
  );
};

export default App;
