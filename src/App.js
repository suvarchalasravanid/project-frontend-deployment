// src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './components/Home';
import SignIn from './components/SignIn';
import About from './components/About';
import Interface from './components/Interface';
import AdminLogin from './components/AdminLogin';
// import Admin from './components/Admin'
// import Admin1 from './components/Admin1'
// import Admin2 from './components/Admin2'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/reserve/:id" element={<Interface />} />
          <Route path="/admin" element={<AdminLogin />} />
          {/* <Route path="/admin1" element={<Admin1 />} />
          <Route path="/admin2" element={<Admin2 />} />
          <Route path="/admin3" element={<Admin />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
