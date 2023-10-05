import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'
import user from '~/store/user'

const Router = React.memo(() => {
  const data = user((state) => state.user)

  const routes = data?.token ? privateRoutes : publicRoutes
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
    </Routes>
  )
})

export default Router
