import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Homepage } from "../pages/Homepage";
import { Users } from "../pages/Users";
import { About } from "../pages/About/About";
import { Employees } from "../pages/Employees";
import { LogIn } from "../pages/LogIn";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PublicRoute } from "./PublicRouter";
import { PrivateRoute } from "./PrivateRoter";

export const AppRouter: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<PrivateRoute component={<Homepage />} />} />
        <Route path="users" element={<PrivateRoute component={<Users />} />} />
        <Route path="employees" element={<PrivateRoute component={<Employees />} />} />
        <Route path="login" element={<PublicRoute component={<LogIn />}/> }/>
        <Route path="about" element={<About />}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
} 