import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Footer from './Components/Footer/footer';
import Order from './Components/Order/order';
import Feature from './Components/Features/feature';
import Header from './Components/Header/header';



function App() {

  return (
    <div className="App">
        <Header/>
        <Feature/>
        <Order/>
        <Footer/>
    </div>
  );
}

export default App;
