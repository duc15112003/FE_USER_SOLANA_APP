import Home from "../ingredient/Home/index";
import Login from "../ingredient/Login/index";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/user/login', component: Login}
];

export { publicRoutes };
