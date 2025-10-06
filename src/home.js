import LogoImage from "../assets/images/restaurant_logo.png";

function createImgElement(srcPath, className){
    const imgElem = document.createElement("img");
    imgElem.src = srcPath;
    imgElem.classList.add(className);
    return imgElem;
}


function createTextElement(text, className){
    const textElem = document.createElement("p");
    textElem.textContent = text;
    textElem.classList.add(className);
    return textElem;
}

const title = "STEAK HOUSE";
const tagline = "Fire. Flavor. Finesse.";
const info = "The finest cuts, fired-grilled to order. Rich flavor, perfect char. This is how steak is meant to taste.";

function createHomePageTextContainer(){
    const taglineElem = createTextElement(tagline, "tagline");
    const titleElem = createTextElement(title, "title");
    const infoElem = createTextElement(info, "info");

    const container = document.createElement("div");
    container.classList.add("info-container");
    container.append(titleElem, taglineElem, infoElem);
    return container;
}

function createHomePageLogoContainer(){
    const logoElem = createImgElement(LogoImage, "logo");
    const container = document.createElement("div");
    container.classList.add("logo-container");
    container.append(logoElem);
    return container;
}

function createHomePageContent(){
    const container = document.createElement("div");
    container.classList.add("main", "home");
    const logoBox = createHomePageLogoContainer();
    const textBox = createHomePageTextContainer();
    container.append(textBox, logoBox);
    return container;
}

export {createHomePageContent};