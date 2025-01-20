import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Applayout } from './Layouts/Applayout'
import { Home } from './pages/Home'
import { PageLayout } from './Layouts/ProjectLayout'
import { Project1 } from './pages/Project1'
import { Project2 } from './pages/Project2'
import { Project3 } from './pages/Project3'

function App() {
  const router=createBrowserRouter([{
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/projects",
        element:<PageLayout/>,
        children:[
          {
            path:"/projects/project1",
            element:<Project1/>
          },
          {
            path:"/projects/project2",
            element:<Project2/>
          },
          {
            path:"/projects/project3",
            element:<Project3/>
          }
        ]      
      }
    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
