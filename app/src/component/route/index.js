import Home from "../ingredient/Home/index";
import Login from "../ingredient/Login/index";
import IdeaUser from "../ingredient/IdeaUser";
import IdeaDetails from "../ingredient/IdeaDetails";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/user/login', component: Login},
    {path: '/ideas', component: IdeaUser},
    {path: '/ideas/details', component: IdeaDetails}
];

export { publicRoutes };
