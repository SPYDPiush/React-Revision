import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubloader } from './components/Github/Github.jsx'



const router = createBrowserRouter( [
  {
    path:'/',
    element : <App />,
    children :[ {
      path: "",
      element : <Home />
    },
    {
      path: "About",
      element : <About />
    },
    {
      path: "Contact",
      element : <Contact />
    },
    {
      path: "user",
      element: <User />
    },
    {
      path: "user/:userid", // in this we pass the value in url and catch the value using params in user component
      element : <User/>
    },
    {
      loader : {githubloader},
      path: 'github',
      element : <Github />,
       
    }
    
  ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>,
)
