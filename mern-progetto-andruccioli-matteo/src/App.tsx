import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/SignUpPage'
import Layout from './Layout'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route index element={<IndexPage/>}/>  
        <Route path="/login" element={<LoginPage/>}/> 
        <Route path="/signup" element={<SignUpPage/>}/>  
      </Route>  
    </Routes>
  )
}

export default App
