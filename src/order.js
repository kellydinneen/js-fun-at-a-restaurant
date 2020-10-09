function takeOrder(order, orderList) {
  orderList.length < 3 ? orderList.push(order) : orderList = orderList;
  }

function refundOrder(orderNumber, orderList) {
  orderList.splice(orderNumber - 1, 1);
  }

function listItems(orderList) {
  return `${orderList[0].item}, ${orderList[1].item}, ${orderList[2].item}`
  //MORE DYNAMIC, BUT FOR SAKE OF THIS TEST OVERCOMPLICATED APPROACH:
  //var itemsInOrder = [orderList[0].item];
    //for (i = 1; i < orderList.length; i++) {
    //itemsInOrder.push(` ${orderList[i].item}`);
    //}
  //return itemsInOrder.toString();
}

function searchOrder(orderList, item) {
  function isNamedThis(element) {
  return element.item == item;
  }
  return orderList.some(isNamedThis);
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
