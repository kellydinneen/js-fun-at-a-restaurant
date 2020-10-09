function createRestaurant(name) {
  return {name: name, menus: {breakfast:[], lunch:[], dinner:[]} }
}

function addMenuItem(restauraunt, item) {
  if(
    !restauraunt.menus.breakfast.includes(item) &&
    !restauraunt.menus.lunch.includes(item) &&
    !restauraunt.menus.dinner.includes(item)) {
      if(item.type == "lunch") {
        restauraunt.menus.lunch.push(item);
      } else if(item.type == "breakfast") {
        restauraunt.menus.breakfast.push(item);
      } else if(item.type == "dinner") {
        restauraunt.menus.dinner.push(item);
      }
    }
}

function removeMenuItem(restauraunt, itemName, type) {
  function findItem(array, itemValue) {
    for(i = 0; i < array.length; i++) {
    if (array[i].item === itemValue) {
      return i
      }
    }
  }
  if(type == "breakfast") {
    restauraunt.menus.breakfast.splice(findItem(restauraunt.menus.breakfast), 1);
  } else if(type == "lunch") {
    restauraunt.menus.lunch.splice(findItem(restauraunt.menus.lunch), 1);
  } else if(type == "dinner") {
    restauraunt.menus.dinner.splice(findItem(restauraunt.menus.dinner), 1);
  }
  if(findItem(restauraunt.menus.breakfast) != undefined || findItem(restauraunt.menus.lunch) != undefined || findItem(restauraunt.menus.dinner) != undefined) {
    return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`
  } else {
    return "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!"
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
