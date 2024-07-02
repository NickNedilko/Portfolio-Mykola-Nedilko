
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import './App.css'

import { lazy } from 'react'



const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'))
const ProjectInfoPage = lazy(()=>import('./pages/ProjectInfoPage/ProjectInfoPage'))



function App() {
  
  return (
       <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='projects' element={<ProjectsPage />} />

          <Route path='/project/:id' element={<ProjectInfoPage/> } />
          <Route path='contacts' element={<h1>Contacts</h1>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
          </Route>
      </Routes>
     </div>
  )
}

export default App
