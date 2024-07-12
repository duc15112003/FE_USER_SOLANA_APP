import Home from "../ingredient/Home/index";
import Register from "../ingredient/Register/index";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/user/register', component: Register},
];

export { publicRoutes };
