import Home from "../ingredient/Home/index";
import Register from "../ingredient/Register/index";
import Login from "../ingredient/Login/index";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/user/register', component: Register},
    { path: '/user/login', component: Login},
];

export { publicRoutes };
