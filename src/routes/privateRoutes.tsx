import { Navigate } from 'react-router-dom'

import Home from '~/pages/Home'
import Login from '~/pages/Login'
import { enumRoutes } from '~/utils/routesEnum'

export const privateRoutes = [
  {
    path: enumRoutes.login,
    element: <Login />,
  },
  {
    path: enumRoutes.home,
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to={enumRoutes.login} replace />,
  },
]
