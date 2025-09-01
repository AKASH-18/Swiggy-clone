const BASE_URL = import.meta.env.VITE_MEDIA_ASSETS_BASE_URL;
// Image CDN URL for Restaurant card
export const IMG_CDN_URL = `${BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;
// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL = `${BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/`;

// Swiggy API to get Restaurant data using foodfire server
// Restaurant listing API
export const FOODFIRE_API_URL = `${
  import.meta.env.VITE_FOODFIRE_APP_BASE_URL
}restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING`;



// Menu API

export const FOODFIRE_MENU_API_URL = `${
  import.meta.env.VITE_FOODFIRE_APP_BASE_URL
}menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=`;


// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 10;

// Github - username
export const Github_UserName = "Akash";
export const Github_Repository_Name = "SwiggyClone";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/chetannada/";
export const Twitter_Link = "https://twitter.com/ChetanNada";
export const Github_Link = "https://github.com/chetannada";
export const Email_Link = "mailto:call2chetannada@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
  

  const CHEF_FOOD = "https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-999x999.png"

  export const LOGO_URL = "https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-999x999.png"