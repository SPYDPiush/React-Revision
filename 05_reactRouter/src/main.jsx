import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubloader } from './components/Github/Github.jsx'



// const router = createBrowserRouter( [
//   {
//     path:'/',
//     element : <App />,
//     children :[ {
//       path: "",
//       element : <Home />
//     },
//     {
//       path: "About",
//       element : <About />
//     },
//     {
//       path: "Contact",
//       element : <Contact />
//     },
//     {
//       path: "user",
//       element: <User />
//     },
//     {
//       path: "user/:userid", // in this we pass the value in url and catch the value using params in user component
//       element : <User/>
//     },
//     {
//       loader : {githubInfoLoader},
//       path: 'github',
//       element : <Github />,
       
//     }
    
//   ]
//   }
// ])


const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element = {<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='User/' element={<User />} />
      <Route path='User/:userid' element={<User />} />
      <Route loader= { githubloader } path='github' element={<Github/>} />
    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>,
)
