import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/pages/homepage/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Router>
          {/* <Header /> */}
          <Home />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            closeOnClick
          />
        </Router>
      </div>
    </>
  )
}

export default App;