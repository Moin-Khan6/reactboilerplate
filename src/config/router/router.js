import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../../pages/login/login'

export default function Routing() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/*" element={<Login/>}  />
        </Routes>
    </Router>  
    </>
    )
}
