import homePage from "./home.js";
import navbar from "./navbar.js";
import aboutPage from "./about.js";
import contactPage from "./contact.js";

let contentDiv = document.querySelector('#content');

navbar(contentDiv);
homePage(contentDiv);

let tabs = document.querySelectorAll("li");
tabs.forEach(tab => {
    tab.addEventListener('click', changeTab);
});

function changeTab(e){
    let targetDiv = e.target;
    contentDiv.removeChild(contentDiv.lastElementChild);
    if(targetDiv.innerHTML === "Home"){
        homePage(contentDiv);
    }
    else if(targetDiv.innerHTML === "About"){
        aboutPage(contentDiv);
    }
    else {
        contactPage(contentDiv);
    }
}