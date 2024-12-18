import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout'
import Home from './Components/home/home';
import About from './Components/about/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, { githubInfoLoader } from './Components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [{
//       path: "",
//       element: < Home/>
//     },{
//       path: "about",
//       element: <About/>
//     },{
//       path: "contact",
//       element: <Contact/>
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route 
      loader = {githubInfoLoader}
      path = 'github' 
      element = {<Github/>}
       />
      </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
