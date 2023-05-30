import { Navigate } from "react-router-dom"
import CardContent from "../pages/CardContent/CardContent"
import FindBy from "../pages/FindBy/FindBy"
import Home from "../pages/Home/Home"
import Landing from "../pages/Landing/Landing"
import Topic from "../pages/Topic/Topic"

const Paths = Object.freeze([
    {
        name: 'landing',
        path: '/',
        element: <Landing/>
    },
    {
        name: 'home',
        path: '/home/*',
        element: <Home/>
    },
    {
        name: 'topicContent',
        path: '/:topicContent',
        element: <Topic/>
    },
    {
        name: 'cardContent',
        path: '/:topicContent/:cardContent',
        element: <CardContent/>
    },
])

export const HomePaths = Object.freeze([
    {
        path: '*',
        element: <Navigate to="findby" replace />
    },
    // {
    //     name: 'forYou',
    //     display: 'For You',
    //     path: 'foryou',
    //     // element: <ForYou/>
    // },
    // {
    //     name: 'discover',
    //     display: 'Discover',
    //     path: 'discover',
    //     // element: <Discover/>
    // },
    // {
    //     name: 'aroundYou',
    //     display: 'Around You',
    //     path: 'aroundyou',
    //     // element: <AroundYou/>
    // },
    {
        name: 'findby',
        display: 'Find By',
        path: 'findby',
        element: <FindBy/>
    }
])

export default Paths