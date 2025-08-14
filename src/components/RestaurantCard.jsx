import "../App.css";
import { CDN_URL} from '../utils/constant'
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (




    <div className="restaurant-card">
      <img className="res-logo" src={CDN_URL +cloudinaryImageId} alt="name" />

      <div className="restaurant-card-content">
        <h3>{name}</h3>
        <em>{cuisines.join(',')}</em>
        <h4>{avgRating}</h4>
        <h4>{costForTwo / 100}</h4>
        <h4>{deliveryTime} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
