import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from '../layouts/BaseLayout'
import Home from './home/Home'
import Page404 from './other/Page404'

export default function BasePages() {
  return (
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
      </BrowserRouter>
  )
}
