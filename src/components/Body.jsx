import RestaurantCard from "./RestaurantCard";
import "../App.css";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9875082&lng=79.4141214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(listOfRestaurants.length === 0){
    return <h1>Loading....</h1>;
  }


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (restaurants) => restaurants.info.avgRating > 4.2
            );
            console.log("Button cliked");
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        <div className="restaurantlist">
          {filteredRestaurant.map((restaurants) => (
            <RestaurantCard key={restaurants.info.id} resData={restaurants} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
