import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import PostJob from "../pages/PostJob";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    
      { path: "/", element: <Home /> },
      { path: "/post-job", element:<PostJob/> },
      { path: "/my-job", element:<MyJobs/> },
      // { path: "/login", element: <Login/> },
      { path: "/signup", element: <Signup/>},
      { path: "edit-job/:id", element:<UpdateJob/>,
        loader :({params}) => fetch ('http://localhost:3000/all-jobs/${params.id}')
       }
    
    ],
  },
]);

export default router;