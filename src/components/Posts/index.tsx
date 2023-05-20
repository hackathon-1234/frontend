import {Button, Typography} from "antd";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {fetchPosts} from "../../store/slices/post/ActionCreators";

const Counter = () => {
    const {
        posts,
        error,
        isLoading
    } = useAppSelector(state => state.post)

    const dispatch = useAppDispatch();

    return(
        <>
            <Button onClick={() => dispatch(fetchPosts(5))}>Получить посты</Button>
            {
                isLoading ?
                    <Typography>Загрузка</Typography>
                    : (posts.map(post => (<Typography>{post.title}</Typography>)))
            }
        </>
    )
}

export default Counter