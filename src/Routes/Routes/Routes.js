import { createBrowserRouter } from "react-router-dom"
import notFound from '../../assets/not found/not found.webp'
import Main from "../../Layout/Main/Main"
import Blogs from "../../Pages/Blogs/Blogs"
import Home from "../../Pages/Home/Home/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }

        ]
    },
    {
        path: '*',
        element: <div><img className="w-full h-96" src={notFound} alt="" />
            <h1 className='flex justify-center text-red-900 text-5xl'>Not Found</h1><br /><h4 className='flex justify-center text-yellow-700 text-xl'>This route is not defined</h4>

        </div>
    }
])

export default router