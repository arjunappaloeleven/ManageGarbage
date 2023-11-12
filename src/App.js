import React from 'react';
import logo from './fb.png';
import cycle from './rc.png';
import { BrowserRouter as Router, Route, Link, Routes,useRoutes } from 'react-router-dom';
import './App.css';
import Car from './car';
import Pay from './pay';
import Mainn from './maiin';
import Login from './Login';
import Recycle from './recycle';
import Toknow from './Toknow';
import Register from "./Register";
import Dashboard from "./Dashboard";
import "./Login.css";

function App() {
  
    let routes = useRoutes([
      { path: "/", element: <Mainn /> },
    { path: "/Login", element: <Login /> },
    { path: "/recycle", element: <Recycle/> },
    { path: "/pay", element: <Pay/>},
    { path: "/Toknow", element: <Toknow/>},
    { path: "/register", element: <Register/>},
    { path: "/dashboard", element: <Dashboard/>}
    ]);
    return routes;
}

export default App;
