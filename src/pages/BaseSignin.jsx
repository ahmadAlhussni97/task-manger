import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './signin/Signin'
import ForgotPassword from './signin/ForgotPassword'
import Page404 from './other/Page404'
import '../assets/scss/SigninForm.scss'

export default function BaseSignin() {
  return (
       <BrowserRouter>
          <Routes>
            <Route index path='/signin' element={<Signin />} />
            <Route path='/forgot-password'  element={<ForgotPassword  />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
      </BrowserRouter>
  )
}
