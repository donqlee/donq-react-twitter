import HomePage from "pages/home";
import NotificationsPage from "pages/notifications";
import PostListPage from "pages/posts";
import PostDetailPage from "pages/posts/detail";
import PostEditPage from "pages/posts/edit";
import PostNewPage from "pages/posts/new";
import ProfilePage from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import SearchPage from "pages/search";
import LoginPage from "pages/users/login";
import SignupPage from "pages/users/signup";
import { Route, Routes, Navigate } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/posts" element={<PostListPage />}></Route>
      <Route path="/posts/:id" element={<PostDetailPage />}></Route>
      <Route path="/posts/new" element={<PostNewPage />}></Route>
      <Route path="/posts/edit/:id" element={<PostEditPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/profile/edit" element={<ProfileEdit />}></Route>
      <Route path="/notifications" element={<NotificationsPage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/users/login" element={<LoginPage />}></Route>
      <Route path="/users/signup" element={<SignupPage />}></Route>
      <Route path="*" element={<Navigate replace to="/" />}></Route>
    </Routes>
  );
}
