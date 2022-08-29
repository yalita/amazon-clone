import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type:"SET_USER",
          user: authUser

        })
      } else {
        dispatch({
          type:"SET_USER",
          user: null

        })
      }
    })
    return () => {
      unsubscribe();
    }

  }, [])
  return (
    <Router>
      <div className='app'>
        <Routes>
        <Route path='/checkout'element={<Checkout/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
