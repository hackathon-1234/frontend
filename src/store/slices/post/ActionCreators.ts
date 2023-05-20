import {AppDispatch} from '../../index';
import {postsFetching, postsFetchingError, postsFetchingSuccess} from './index';
import {PostAPI} from '../../../api/api';

export const fetchPosts = (limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postsFetching());
        const responce = await PostAPI.getAll(limit);
        dispatch(postsFetchingSuccess(responce.data))
    } catch (e) {
        dispatch(postsFetchingError("Error"))
    }
}