import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { checkAuth } from "./store/slices/auth/ActionCreators";
import { Typography } from "antd";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import { Link } from 'react-router-dom';

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
    <div className="App">
      <Counter />
      <Posts />

      <nav>
        <Link to='/login'>Логин</Link>
        <Link to='/registration'>Регистрация</Link>
      </nav>

      <Routes>
        <Route path={"/"} element={<h1>Foo</h1>} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/registration"} element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
