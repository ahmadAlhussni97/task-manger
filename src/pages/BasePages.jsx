import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from '../layouts/BaseLayout'
import Home from './home/Home'
import Page404 from './other/Page404'
import Project from './project/Projects';
import ProjectTasks from './tasks/projects/Tasks';
import Tasks from './tasks/Tasks';
import Users from './user/Users';
import Roles from './Role/Roles';
import Setting from './setting/setting';
import Profile from './profile/Profile';

export default function BasePages() {
  return (
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path='/projects' element={<Project />} />
              <Route path='/projects/:id/tasks' element={<ProjectTasks />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/users' element={<Users />} />
              <Route path='/roles' element={<Roles />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/setting' element={<Setting />} />
              <Route path='/logout' />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
      </BrowserRouter>
  )
}
