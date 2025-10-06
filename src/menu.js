

const items = [
  "Soup of the Day",
  "House Salad",
  "Garlic Cheese Bread",
  "Crispy Calamari",
  "The Signature Steak",
  "Herb-Roasted Chicken",
  "Classic Cheeseburger",
  "Pan-Seared Salmon",
  "Shrimp Scampi Pasta",
  "Butternut Squash Ravioli",
  "French Fries",
  "Garlic Mashed Potatoes",
  "Sautéed Seasonal Greens",
  "Chocolate Lava Cake",
  "New York Cheesecake"
];

function createMenuList(){
    const listContainer = document.createElement("ul");
    listContainer.classList.add("menu-list");

    items.forEach((itemName) => {
        const listElem = document.createElement("li");
        listElem.textContent = itemName;
        listElem.classList.add("item");
        listContainer.appendChild(listElem);
    });

    return listContainer;
}

function createMenuPageContent(){
    const container = document.createElement("div");
    container.classList.add("main", "menu");
    const menuListElem = createMenuList();
    container.appendChild(menuListElem);
    return container;
}

export {createMenuPageContent};