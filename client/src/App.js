
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from './components/mainpage'
import GetAddress from './components/getAddress'


function App() {
   const router = createBrowserRouter([
     {
       path: '/',
       element: <MainPage />,
     },{
      path:'/getAddresses',
      element: <GetAddress/>
     }
   ])
   return <RouterProvider router={router} />
}

export default App
