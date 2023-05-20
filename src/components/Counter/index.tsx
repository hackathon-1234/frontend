import {Button, Typography} from "antd";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {countSlice} from "../../store/slices/counter";

const Counter = () => {
    const { count } = useAppSelector(state => state.count)
    const { increment, decrement } = countSlice.actions
    const dispatch = useAppDispatch()

    return(
        <>
            <Typography>{count}</Typography>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
        </>
    )
}

export default Counter