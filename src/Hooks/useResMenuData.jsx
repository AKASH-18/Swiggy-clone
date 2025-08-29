import { useEffect, useState } from "react";

const useResMenuData = (
  FOODFIRE_MENU_API_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Only fetch if resId exists
    if (resId) {
      getRestaurantInfo();
    }
  }, [resId]); // Add resId as dependency

  async function getRestaurantInfo() {
    try {
      console.log("Fetching from URL:", FOODFIRE_MENU_API_URL + resId);
      
      const response = await fetch(FOODFIRE_MENU_API_URL + resId);
      console.log("Response status:", response.status);
      
      // Handle both successful responses (200-299) and 304 (Not Modified)
      if (!response.ok && response.status !== 304) {
        const err = response.status;
        throw new Error(`HTTP error! status: ${err}`);
      }
      
      const json = await response.json();
      console.log("Response data:", json);
      
      // Check if we have valid data
      if (json?.statusCode === 1) {
        console.error("API Error:", json?.statusMessage);
        throw new Error(json?.statusMessage || "Failed to fetch menu data");
      }

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
            (x) => x.card?.card
          )
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (err) {
      setMenuItems([]);
      setRestaurant(null);
      console.error("Error fetching restaurant menu:", err);
    }
  }
  
  return [restaurant, menuItems];
};

export default useResMenuData;