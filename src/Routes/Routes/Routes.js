import { createBrowserRouter } from "react-router-dom"
import notFound from '../../assets/not found/not found.webp'
import Main from "../../Layout/Main/Main"
import Blogs from "../../Pages/Blogs/Blogs"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home/Home"
import SellerLogin from "../../Pages/Login/SellerLogin/SellerLogin"
import UserLogin from "../../Pages/Login/UserLogin/UserLogin"
import SellerSignup from "../../Pages/Signup/SellerSignup/SellerSignup"
import UserSignup from "../../Pages/Signup/UserSignup/UserSignup"

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
            },
            {
                path: '/userLogin',
                element: <UserLogin></UserLogin>
            },
            {
                path: '/userSignup',
                element: <UserSignup></UserSignup>
            },
            {
                path: '/sellerLogin',
                element: <SellerLogin></SellerLogin>
            },
            {
                path: '/sellerSignup',
                element: <SellerSignup></SellerSignup>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },

    // 404 route
    {
        path: '*',
        element: <div><img className="w-full h-96" src={notFound} alt="" />
            <h1 className='flex justify-center text-red-900 text-5xl'>Not Found</h1><br /><h4 className='flex justify-center text-yellow-700 text-xl'>This route is not defined</h4>

        </div>
    }
])

export default router