let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let currMode = "light";

btn.addEventListener("click", () => {
    if (currMode == "light") {
        currMode = "dark";
        body.setAttribute("class", currMode);
        btn.innerHTML = "Light-Mode"
        btn.style.border ='1px solid white';

    }
    else {
        currMode = "light";
        body.setAttribute('class', currMode);
        btn.innerHTML = "Dark-Mode"
        btn.style.border ='1px solid black';


    }
});