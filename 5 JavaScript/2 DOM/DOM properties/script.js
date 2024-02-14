let para = document.querySelector("p");
console.log(para)

let attr = para.getAttribute("class");
console.log(attr);
para.setAttribute("class", "paragraph");

let createEl = document.createElement('h3');
para.before(createEl);


let h3 = document.querySelector("h3");
h3.innerHTML = "We Are Learning Basic Js If you want to learn more Explore By Yourself";
h3.style.color="purple";

h3.classList.add("classh3"); 

// to remove element 
// h3.remove()
// to remove class
// h3.classList.remove("classh3")