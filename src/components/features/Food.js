import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/food.scss';

function Food() {
    const [restaurantList, setRestaurantList] = useState([]);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.yelp.com/v3/businesses/search";

    useEffect( () => {
        axios.get(proxyurl + url, {
            headers: {
                Authorization: 'Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx',
            },
            params: {
                location: 'charlotte',
            },
        })
        .then(response => {
            setRestaurantList(response.data.businesses);
        })
        .catch(error => {
            console.log('DATA NOT RETURNED', error);
        });
    }, []);

  return (
    <div className="Food">
      <h1>Food</h1>
      <div className='restaurant-list'>
      {restaurantList.map((restaurant) => {
        return (
            <div className='restaurant-card'>
                {console.log(restaurant)}
                <h2>{restaurant.name}</h2>
                <a href={restaurant.url} target="_blank"><p>Details</p></a>
                <img src={restaurant.image_url} />
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default Food;
