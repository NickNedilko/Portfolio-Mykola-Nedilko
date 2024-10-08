
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import './App.css'

import { lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'))
const ProjectInfoPage = lazy(()=>import('./pages/ProjectInfoPage/ProjectInfoPage'))




function App() {
  
  return (
      
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='/:project/:id' element={<ProjectInfoPage/> } />
          <Route path='*' element={<h1>Not found</h1>}/>
          </Route>
      </Routes>
   
  )
}

export default App
