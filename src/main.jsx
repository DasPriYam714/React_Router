import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Users from './Components/Users/Users.jsx';
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path:"/about",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/users",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)