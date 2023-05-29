import CardContent from "../pages/CardContent/CardContent"
import FindBy from "../pages/FindBy/FindBy"
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
        path: '/home',
        element: <>Home Page to develop</>
    },
    {
        name: 'findBy',
        path: '/findby',
        element: <FindBy/>
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

export default Paths