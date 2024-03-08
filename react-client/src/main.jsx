import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import ecommerceStore from './store/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ecommerceStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
