import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles/food.scss';

function Food() {
    const [businessList, setBusinessList] = useState([]);

    useEffect( () => {
        axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx`,
            },
            params: {
                location: 'charlotte',
            },
        })
        .then(response => {
            setBusinessList(response.data.businesses);
        })
        .catch(error => {
            console.log('DATA NOT RETURNED', error);
        });
    }, []);
    console.log(businessList);

  return (
    <div className="Food">
      <h1>Food</h1>
    </div>
  );
}

export default Food;
