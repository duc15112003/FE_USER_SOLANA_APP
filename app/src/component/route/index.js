import Home from "../ingredient/Home/index";
import Login from "../ingredient/Login/index";

import IdeaUser from "../ingredient/IdeaUser";
import IdeaDetails from "../ingredient/IdeaDetails";
import FogetPassword from "../ingredient/FogetPassword";
import UserInfor from "../ingredient/UserInfor";
const publicRoutes = [
    {path: '/', component: Home },
    {path: 'user/login', component: Login},
    {path: 'user/forgotpassword', component: FogetPassword},
    {path: 'user/ideas', component: IdeaUser},
    {path: 'ideas/details', component: IdeaDetails},
    {path: 'user/infor', component: UserInfor}
];

export { publicRoutes };
