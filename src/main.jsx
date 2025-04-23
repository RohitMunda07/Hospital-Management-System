import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home, Form, Transaction } from './Components/index.js'
import store from './store/store.js'
import {Login, AddEmp, UpdateDetails, DumpData, Admin} from './Components/index.js'
import Support from './Pages/Support.jsx'
import HowItWorks from './Pages/HowItWorks.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/form",
        element: <Form />
      },
      {
        path: "/log",
        element: <Transaction />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: '/addEmp',
        element: <AddEmp />
      },
      {
        path: '/updEmp',
        element: <UpdateDetails />
      },
      {
        path: '/dump',
        element: <DumpData />
      },
      {
        path: '/support',
        element: <Support />
      },
      {
        path: '/howItWork',
        element: <HowItWorks />
      }   
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
