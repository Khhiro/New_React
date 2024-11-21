import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Page1 from './page/page1 copy'
import Page2 from './page/page1 copy 2'
import Page3 from './page/page1 copy 3'
import Page4 from './page/page1 copy 4'
import Page5 from './page/page1 copy 5'
import Page6 from './page/page1 copy 6'
import Page7 from './page/page1 copy 7'
import Page8 from './page/page1 copy 8'
import Page9 from './page/page1 copy 9'
import Page10 from './page/page1 copy 10'
const router = createBrowserRouter ([
  {
  path:'/',
  element: <Layout />,
  children:[
    {
      path:'section1',
      element:<Page1 />
    },
    {
      path:'section2',
      element:<Page2 />
    },
    {
      path:'section3',
      element:<Page3 />
    },
    {
      path:'section4',
      element:<Page4 />
    },
    {
      path:'section5',
      element:<Page5 />
    },
    {
      path:'section6',
      element:<Page6 />
    },
    {
      path:'section7',
      element:<Page7 />
    },
    {
      path:'section8',
      element:<Page8 />
    },
    {
      path:'section9',
      element:<Page9 />
    },
    {
      path:'section10',
      element:<Page10 />
    }
  ]
  }
])
function App() {
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
