
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from './components/mainpage'
import GetAddress from './components/getAddress'
import UpdateAddress from './components/updateAddress'
import GetOrderList from './components/getOrderList'
import GetOrderDetails from './components/getOrderDetails'

function App() {
   const router = createBrowserRouter([
     {
       path: '/',
       element: <MainPage />,
     },{
      path:'/getAddresses',
      element: <GetAddress/>
     },{
      path:'/updateAddress',
      element : <UpdateAddress/>
     },{
      path:'/getOrderList',
      element: <GetOrderList/>
     },{
      path:'/getOrderDetails',
      element:<GetOrderDetails/>
     }
   ])
   return <RouterProvider router={router} />
}

export default App
