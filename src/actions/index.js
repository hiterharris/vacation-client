import {useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const fetchUser = () => dispatch => {
    useEffect(() => {
        axiosWithAuth()
        .get(`/api/users/${localStorage.id}`)
        .then(response => {
          dispatch({ type: FETCH_USER_DATA, payload: response.data})
        })
        .catch(error => {
          console.log(error);
        })
      }, [dispatch]);
}