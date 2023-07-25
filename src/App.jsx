import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Controller from './Router/Controller'
import Home from './Body/Home/Home'
import Error from './Error/Error'
import Users from './Body/Users/Users'
import Products from './Body/Products/Products'
import ProductDetails from './Body/Products/ProductDetails'
import UserDetails from './Body/Users/UserDetails'

function App() {
  const controller = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        return fetch('prodcuts2.json')
      },
      element: <Controller></Controller>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('prodcuts2.json')
          },
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: async () => {
            return fetch('prodcuts.json');
          }
        },
        {
          path: '/users',
          element: <Users></Users>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: '/products/:product',
          element: <ProductDetails></ProductDetails>
        },
        {
          path: '/users/:id',
          element: <UserDetails></UserDetails>,
          loader: async({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          }
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>,
    }
  ])
  return (
    <div>
      <RouterProvider router={controller}></RouterProvider>
    </div>

  )
}

export default App
