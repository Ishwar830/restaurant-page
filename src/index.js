import "./stylesheets/general.css";
import "./stylesheets/home.css";
import "./stylesheets/menu.css";
import "./stylesheets/about.css";
import { createHomePageContent } from "./home.js";
import { createMenuPageContent } from "./menu.js";
import { createAboutPageContent } from "./about.js";

const navButtons = document.querySelector(".btnGroup");
const contentBox = document.querySelector("#content");

const Pages = {
    home: createHomePageContent(),
    menu: createMenuPageContent(),
    about: createAboutPageContent(),
};


navButtons.addEventListener('click', (e) => {
    if(e.target.nodeName !== "BUTTON") return;
    const currentSelection = e.target;
    const previousSelection = navButtons.querySelector(".selected");
    previousSelection.classList.toggle("selected");
    currentSelection.classList.add("selected");
    loadPage(Pages[currentSelection.id]);
});


function loadPage(page){
    contentBox.innerHTML = "";
    contentBox.appendChild(page);
}

loadPage(Pages.home);

console.log("hello world");