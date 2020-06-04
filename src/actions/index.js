import {useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_RESTAURANT_DATA = 'FETCH_RESTAURANT_DATA';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.yelp.com/v3/businesses/search";

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

export const fetchRestaurants = () => dispatch => {
  useEffect( () => {
    axiosWithAuth()
      .get(proxyurl + url, {
          headers: {
              Authorization: 'Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx',
          },
          params: {
              location: 'charlotte',
          },
      })
      .then(response => {
          dispatch({ type: FETCH_RESTAURANT_DATA, payload: response.data.businesses})
      })
      .catch(error => {
          console.log('DATA NOT RETURNED', error);
      });
}, []);
}