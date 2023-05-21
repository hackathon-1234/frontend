import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/useRedux";
import {checkAuth} from "./store/slices/auth/ActionCreators";
import {Typography} from "antd";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import AdminPage from "./pages/adminPage";
import ClientPage from "./pages/clientPage";
import ManualPage from "./pages/manualPage";
import MainPage from "./pages/mainPage";

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
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/registration"} element={<RegistrationPage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route path={"/client"} element={<ClientPage />} />
          <Route path={"/manual/:id"} element={<ManualPage />} />
      </Routes>
  );
}

export default App;
