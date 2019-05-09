import Dashboard from "views/Dashboard/Dashboard";
//import UserProfile from "views/UserProfile/UserProfile";
//import TableList from "views/TableList/TableList";
import UserList from "views/Users/Users";
import Tree from "views/Tree/Tree";
import MemberList from "views/Members/Members";
import Settings from "views/Settings/Settings";
// import Typography from "views/Typography/Typography";
// import Icons from "views/Icons/Icons";
// import Maps from "views/Maps/Maps";
// import Notifications from "views/Notifications/Notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile
  // // },
  // {
  //   path: "/table",
  //   name: "Users",
  //   icon: "pe-7s-note2",
  //   component: TableList
  // },
  {
    path: "/users",
    name: "Users",
    icon: "pe-7s-user",
    component: UserList
  },
  {
    path: "/tree",
    name: "Tree",
    icon: "pe-7s-share",
    component: Tree
  },
  {
    path: "/members",
    name: "Members",
    icon: "pe-7s-note2",
    component: MemberList
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "pe-7s-config",
    component: Settings
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography
  // },
  // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications
  // },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
