import FindBy from "../pages/FindBy/FindBy"
import Topic from "../pages/Topic/Topic"

const Paths = Object.freeze([
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
])

export default Paths