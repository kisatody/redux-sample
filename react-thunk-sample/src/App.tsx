import React, { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
// import UserPage from './page/user/UserPage'
const UserPage = lazy(()=>import('./page/user/UserPage'))
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <>
            <Route path='/' element={<HomePage/>}>
                <Route path='home' element={<Navigate to='/'/>}></Route>
            </Route>
            <Route path='/user' element={<UserPage/>}></Route>
          </>
        </Routes>
    </BrowserRouter>
  )
}

export default App