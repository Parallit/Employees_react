import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Homepage } from 'src/pages/Homepage';
import { Users } from 'src/pages/Users';
import { About } from 'src/pages/About';
import { Employees } from 'src/pages/Employees';
import { LogIn } from 'src/pages/LogIn';
import { NotFoundPage } from 'src/pages/NotFoundPage';
import { PublicRoute } from 'src/components/PublicRouter';
import { PrivateRoute } from 'src/components/PrivateRoter';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute component={<Homepage />} />} />
        <Route path="users" element={<PrivateRoute component={<Users />} />} />
        <Route path="employees" element={<PrivateRoute component={<Employees />} />}/>
        <Route path="login" element={<PublicRoute component={<LogIn />} />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
