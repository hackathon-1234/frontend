import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/useRedux";
import {checkAuth} from "./store/slices/auth/ActionCreators";
import {Typography} from "antd";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import AdminPage from "./pages/adminPage";

function App() {
  const { isLoading } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])

  if (isLoading) {
    return <Typography>Загрузка</Typography>
  }

  return (
      <Routes>
          <Route path={"/"} element={<h1>Foo</h1>} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/registration"} element={<RegistrationPage />} />
          <Route path={"/admin"} element={<AdminPage />} />
      </Routes>
  );
}

export default App;
