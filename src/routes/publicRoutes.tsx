import { Navigate } from 'react-router-dom'

import Login from '~/pages/Login'
import { enumRoutes } from '~/utils/routesEnum'

export const publicRoutes = [
  {
    path: enumRoutes.login,
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to={enumRoutes.login} replace />,
  },
]
