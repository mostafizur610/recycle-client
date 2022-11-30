import { createBrowserRouter } from "react-router-dom"
import notFound from '../../assets/not found/not found.webp'
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout"
import Main from "../../Layout/Main/Main"
import Blogs from "../../Pages/Blogs/Blogs"
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts"
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers"
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers"
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders"
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts"
import MyWishlist from "../../Pages/Dashboard/MyWishlist/MyWishlist"
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems"
import CategoriesDetails from "../../Pages/Home/Categories/CategoriesDetails"
import Home from "../../Pages/Home/Home/Home"
import AdminLogin from "../../Pages/Login/Login/AdminLogin"
import Login from "../../Pages/Login/Login/Login"
import SellerLogin from "../../Pages/Login/SellerLogin/SellerLogin"
import UserLogin from "../../Pages/Login/UserLogin/UserLogin"
import SellerSignup from "../../Pages/Signup/SellerSignup/SellerSignup"
import UserSignup from "../../Pages/Signup/UserSignup/UserSignup"
import AdminRoute from "../PrivateRoutes/AdminRoute"
import SellerPrivateRoutes from "../PrivateRoutes/SellerPrivateRoute"
import UserPrivateRoutes from "../PrivateRoutes/UserPrivateRoutes"

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
                path: '/category/:id',
                element: <UserPrivateRoutes><CategoriesDetails></CategoriesDetails></UserPrivateRoutes>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
            {
                path: '/blogs',

                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
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
            },
            {
                path: '/adminLogin',
                element: <AdminLogin></AdminLogin>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            // buyers
            {
                path: '/dashboard/myOrders',
                element: <UserPrivateRoutes><MyOrders></MyOrders></UserPrivateRoutes>
            },
            {
                path: '/dashboard/myWishlist',
                element: <MyWishlist></MyWishlist>
            },
            // sellers
            {
                path: '/dashboard/addProducts',
                element: <SellerPrivateRoutes><AddProducts></AddProducts></SellerPrivateRoutes>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerPrivateRoutes><MyProducts></MyProducts></SellerPrivateRoutes>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerPrivateRoutes></SellerPrivateRoutes>
            },
            // admin
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
        ]
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