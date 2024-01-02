import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/SignUpPage'
import Layout from './Layout'
import axios from 'axios'
import { UserContextProvider } from './UserContent'
import AccountPage from './pages/AccountPage'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/> }>
          <Route index element={<IndexPage/>}/>  
          <Route path="/login" element={<LoginPage/>}/> 
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/account/:subpage?" element={<AccountPage/>}/>  
        </Route>  
      </Routes>
    </UserContextProvider>
  )
}

export default App
