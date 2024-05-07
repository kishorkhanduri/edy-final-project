var cardContainer = document.getElementById("cart-item-container");
var totalAmount = document.getElementById("total-amount");
var numberOfItem = document.getElementById("number-of-item");

var myLocalStorageData = JSON.parse(localStorage.getItem("product-list")) || [];

function createItemOnCheckOut(iPreview, iName, iCount, iPrice) {
  var item = document.createElement("div");
  item.setAttribute("class", "item");

  var itemImg = document.createElement("img");
  itemImg.src = iPreview;

  var itemDetail = document.createElement("div");
  itemDetail.setAttribute("class", "detail");

  var itemName = document.createElement("h3");
  var itemNameText = document.createTextNode(iName);
  itemName.appendChild(itemNameText);

  var itemCount = document.createElement("p");
  var itemCountText = document.createTextNode("x" + iCount);
  itemCount.appendChild(itemCountText);

  var itemPrice = document.createElement("p");
  var itemPriceText = document.createTextNode("Amount: " + iCount * iPrice);
  itemPrice.appendChild(itemPriceText);

  itemDetail.appendChild(itemName);
  itemDetail.appendChild(itemCount);
  itemDetail.appendChild(itemPrice);

  item.appendChild(itemImg);
  item.appendChild(itemDetail);

  return item;
}

myLocalStorageData.forEach(function(itemData) {
  cardContainer.appendChild(
    createItemOnCheckOut(
      itemData.preview,
      itemData.title,
      itemData.count,
      itemData.price
    )
  );
});

var cost = 0;
var counter = 0;

myLocalStorageData.forEach(function(itemData) {
  counter += itemData.count;
  cost += parseInt(itemData.count) * parseInt(itemData.price);
});

totalAmount.innerHTML = cost;
numberOfItem.innerHTML = counter;

var placeOrder = document.getElementById("place-order");

placeOrder.addEventListener("click", function() {
  localStorage.removeItem("product-list");
  localStorage.setItem("cart-count", "0");
  totalAmount.innerHTML = 0;
  numberOfItem.innerHTML = 0;
});
