import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurants, foodList} from '../../actions';
import '../../styles/food.scss';

function Food(props) {
    props.fetchRestaurants();
    const addItem = (item) => {
        props.foodList(item);
    }
    return (
        <div className="Food">
            <h1>Food</h1>
            <div className='restaurant-list'>
            {props.restaurantList.map((restaurant, i) => {
            return (
                <div onClick={() => addItem(restaurant.name)} className='restaurant-card' key={i}>
                    <h2>{restaurant.name}</h2>
                    <a href={restaurant.url} target="_blank" rel="noopener noreferrer"><p>Details</p></a>
                    <img src={restaurant.image_url} alt="restaurant"/>
                </div>
                );
            })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      restaurantList: state.restaurantList,
      foodList: state.foodList
    }
  }
  
  export default connect(
    mapStateToProps,
    {fetchRestaurants, foodList}
  )(Food);
  