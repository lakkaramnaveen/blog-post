import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Authors from './pages/Authors';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path:"posts/:id", element: <PostDetail/>},
      {path:"login", element: <LoginPage/>},
      {path:"register", element: <Register/>},
      {path:"profile/:id", element: <UserProfile/>},
      {path:"authors", element: <Authors/>},
      {path:"create", element: <CreatePost/>},
      {path:"posts/categories/:category", element: <CategoryPosts/>},
      {path:"posts/users/:id", element: <AuthorPosts/>},
      {path:"myposts/:id", element: <Dashboard/>},
      {path:"posts/:id/edit", element: <EditPost/>},
      {path:"logout", element: <Logout/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);