import { createBrowserRouter } from "react-router-dom";

import App from "../App.tsx";
import Home from "../pages/home/home.tsx";
import About from "../pages/about/about.tsx";
import Article from "../pages/article/article.tsx";
import Note from "../pages/note/note.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // 当用户在父路由的确切路径上时，要匹配并渲染这个路由，
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/note",
        element: <Note />,
      },
    ],
  },
 
]);

export default router;
