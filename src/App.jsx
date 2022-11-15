import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';


let routers = createBrowserRouter([
  {path:'/' , element: <Layout/> , children:[
    {index:true , element: <Home/>},
    {path:'portfolio' , element: <Portfolio/>},
    {path:'about' , element: <About/>},
    {path:'contact' , element: <Contact/>},
    {path:'*' , element: <NotFound/>},
  ]}
])

export default function App() {
  return (
    <>
    <RouterProvider router={routers}/>
    </>
  );
}

