import "./stylesheets/general.css";
import "./stylesheets/home.css";
import { createHomePageContent } from "./home.js";


const contentBox = document.querySelector("#content");

const homePage = createHomePageContent();

function loadPage(page){
    contentBox.innerHTML = "";
    contentBox.appendChild(page);
}

loadPage(homePage);

console.log("hello world");