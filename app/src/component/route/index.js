import Home from "../ingredient/Home/index";
import Login from "../ingredient/Login/index";
import IdeaUser from "../ingredient/IdeaUser";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/user/login', component: Login},
    {path: '/ideas', component: IdeaUser}
];

export { publicRoutes };
