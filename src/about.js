

const contactDetails = {
    "Restaurant Name": "Steak House",
    Address: "123 Prime Rib Lane",
    Phone: "(555) 555-555 (4745)",
    Email: "reservations@steakhouse.com",
    Website: "www.steakhouse.com"
};

function createContactElem(){
    const categoryList = document.createElement("ul");
    const valueList = document.createElement("ul");
    categoryList.classList.add("category");
    valueList.classList.add("value");

    for(const key in contactDetails){
        const categoryItem = document.createElement("li");
        const valueItem = document.createElement("li");
        categoryItem.textContent = key;
        valueItem.textContent = contactDetails[key];
        categoryList.appendChild(categoryItem);
        valueList.appendChild(valueItem);
    }

    return [categoryList, valueList];
}

function createAboutPageContent(){
    const container = document.createElement("div");
    container.classList.add("main", "about");
    container.append(...createContactElem());
    return container;
}

export {createAboutPageContent} ;