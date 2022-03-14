import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SignInPage } from '../components/pages/SignInPage';
import { DashboardPage } from '../components/pages/DashboardPage';
import { PostsPage } from '../components/pages/PostsPage';
import { NewPostPage } from '../components/pages/NewPostPage';
import { EditPostPage } from '../components/pages/EditPostPage';
import { CreateUserPage } from '../components/pages/CreateUserPage';
import { UserListPage } from '../components/pages/UserListPage';

export function RoutesPath() {
  return (
    <Routes>
      <Route path="/" exact element={<SignInPage />} />
      <Route path="/dashboard" exact element={<DashboardPage />} />
      <Route path="/dashboard/posts" exact element={<PostsPage />} />
      <Route path="/dashboard/new-post" exact element={<NewPostPage />} />
      <Route path="/dashboard/edit-post" exact element={<EditPostPage />} />
      <Route path="/dashboard/create-user" exact element={<CreateUserPage />} />
      <Route path="/dashboard/user-list" exact element={<UserListPage />} />
    </Routes>
  );
}
