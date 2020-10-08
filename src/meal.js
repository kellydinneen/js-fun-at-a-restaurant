function nameMenuItem(item) {
  return `Delicious ${item}`;
}

function createMenuItem(name, price, type) {
  return {name, price, type};
}

function addIngredients(ingredient, recipe) {
  recipe.includes(ingredient) ? recipe = recipe : recipe.push(ingredient);
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(initialPrice) {
  return 0.9 * initialPrice;
}

function createRecipe(title, ingredients, type) {
  return {title, ingredients, type};
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
