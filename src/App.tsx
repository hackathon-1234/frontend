import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import {useAppDispatch, useAppSelector} from "./hooks/useRedux";
import {checkAuth} from "./store/slices/auth/ActionCreators";
import {Typography} from "antd";

function App() {
    const {isLoading} = useAppSelector(state => state.auth)
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
    </div>
  );
}

export default App;
