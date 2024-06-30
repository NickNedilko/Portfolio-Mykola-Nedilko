
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import './App.css'
// import  HomePage  from './pages/HomePage/HomePage'
import { lazy } from 'react'



const HomePage = lazy(()=>import('./pages/HomePage/HomePage'))

function App() {
  
  return (
       <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='projects' element={<h1>Projects</h1>} />
          <Route path='contacts' element={<h1>Contacts</h1>}/>
          <Route path='*' element={<h1>Not found</h1>}/>
          </Route>
      </Routes>
     </div>
  )
}

export default App
