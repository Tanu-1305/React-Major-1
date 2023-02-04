import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
 const user = useSelector(selectUser);
 const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch( 
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        dispatch(logout());
      }
    });

      return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {/* <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path = "/profile">
            <ProfileScreen />
            <Route exact path = "/" />
              <HomeScreen />
            </Route>
          </Switch>
        
        )}
      </Router> */}
<BrowserRouter>
<ReactRoutes>

<Route path="/login" element={<SignupScreen />} />
<Route path="/profile" element={<ProfileScreen />} />
<Route path="/" element={<LoginScreen />} />
<Route path="/home" element={<HomeScreen />} />

</ReactRoutes> 

</BrowserRouter>

    </div>
  );
      }


export default App; 
