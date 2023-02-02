import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <>
            <Route path='/' element={<HomePage/>}>
                <Route path='home' element={<Navigate to='/'/>}></Route>
            </Route>
          </>
        </Routes>
    </BrowserRouter>
  )
}

export default App