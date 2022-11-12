import { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from "./Components/NavComp";
import Home from "./Components/Home";
import Contact from "./Components/Contact";


class App extends Component {

  render() {
    return (
<BrowserRouter>
<div className="App">
        <NavComp />
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>

      </div>
</BrowserRouter>
     

    );
  }

}

export default App;