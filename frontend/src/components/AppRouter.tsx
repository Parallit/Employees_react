import { FC } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { PrivateRoute } from 'src/components/PrivateRoter';
import { subordinateLoader } from 'src/pages/SubordinateInfoPage/SubordinateInfoLoader';

import { Layout } from 'src/components/Layout';
import { Homepage } from 'src/pages/Homepage';
import { Users } from 'src/pages/Users';
import { EmployeesPage } from 'src/pages/EmployeesPage';
import { LogIn } from 'src/pages/LogIn';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { ProfilePage } from 'src/pages/ProfilePage';

import { ChiefInfoPage } from 'src/pages/ChiefInfoPage';
import { SubordinateInfoPage } from 'src/pages/SubordinateInfoPage';
import { chiefLoader } from 'src/pages/ChiefInfoPage/ChiefInfoLoader';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<Homepage />} />
      <Route path="login" element={<LogIn />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<PrivateRoute />}      >
        <Route path="users" element={<Users />} />
        <Route
          path="users/employee/:id"
          element={<SubordinateInfoPage />}
          loader={subordinateLoader}
        />
        <Route path="employees" element={<EmployeesPage />} />
        <Route
          path="employees/user/:id"
          element={<ChiefInfoPage />}
          loader={chiefLoader}
        />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);

export const AppRouter: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};