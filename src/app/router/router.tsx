import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { Error404 } from 'pages/404'
import { Characters } from 'pages/characters'
import { Character } from 'pages/character'
import { BaseLayout } from 'pages/layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Characters />,
  },
  {
    path: 'character/:id',
    element: <Character />,
  },
]

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: routes,
    path: '/',
    errorElement: <Error404 />,
  },
])
