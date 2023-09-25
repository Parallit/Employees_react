import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Homepage } from 'src/pages/Homepage';
import { Users } from 'src/pages/Users';
import { About } from 'src/pages/About';
import { EmployeesPage } from 'src/pages/EmployeesPage';
import { LogIn } from 'src/pages/LogIn';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { PrivateRoute } from 'src/components/PrivateRoter';
import { ProfilePage } from 'src/pages/ProfilePage';
import { ChiefInfoPage } from 'src/pages/ChiefInfoPage';
import { SubordinateInfoPage } from 'src/pages/SubordinateInfoPage';

export const AppRouter: FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<PrivateRoute component={<Users />}  />} />
          <Route path="users/employee/:id" element={<PrivateRoute component={<SubordinateInfoPage />}  />} />
          <Route path="/employees/:id" element={<PrivateRoute component={<SubordinateInfoPage />}  />} />
          <Route path="employees" element={<PrivateRoute component={<EmployeesPage />} />} />
          <Route path="employees/user/:id" element={<PrivateRoute component={<ChiefInfoPage />} />} />
          <Route path="profile" element={<PrivateRoute component={<ProfilePage />} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};
