import Home from "../ingredient/Home/index";
import Login from "../ingredient/Login/index";

import FogetPassword from "../ingredient/FogetPassword/index";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/user/login', component: Login},
    { path: '/user/forgotpassword', component: FogetPassword}
];

export { publicRoutes };
