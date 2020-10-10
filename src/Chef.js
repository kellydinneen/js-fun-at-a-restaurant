class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  // Accidentally made a new createRestaurant function
  // before realizing it is imported from other file:
  // createRestauraunt(restaurantName) {
  //   this.restaurant = [];
  //   return this.restaurant;
  // }
  greetCustomer(customerName, morning) {
    return morning ? `Good morning, ${customerName}!` : `Hello, ${customerName}!`;
  }
  // Same as with createRestaurant on lines 6-10 -- added redundant function:
  //addMenuItem(restaurant, foodItem) {
  //   restaurant.push(foodItem);
  // }
  checkForFood(foodItem) {
    return this.restaurant.menus.breakfast.includes(foodItem) ||
           this.restaurant.menus.lunch.includes(foodItem) ||
           this.restaurant.menus.dinner.includes(foodItem) ?
           `Yes, we're serving ${foodItem.name} today!` :
           `Sorry, we aren't serving ${foodItem.name} today.`;
  }
}


module.exports = Chef;
