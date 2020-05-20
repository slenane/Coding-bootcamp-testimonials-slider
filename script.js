let previousTanya = document.querySelector("#previousTanya");
let nextTanya = document.querySelector("#nextTanya");
let previousJohn = document.querySelector("#previousJohn");
let nextJohn = document.querySelector("#nextJohn");

let profile = document.getElementsByClassName("profile");

let count = 1;

previousTanya.addEventListener("click", toggleClass);
nextTanya.addEventListener("click", toggleClass);
previousJohn.addEventListener("click", toggleClass);
nextJohn.addEventListener("click", toggleClass);

function toggleClass(toggle) {
    for(let i = 0; i < profile.length; i++){
        if(count === 1) {
            profile[i].classList.add("d-none");
            profile[i + 1].classList.remove("d-none");
            count++;
        } else {
            profile[i].classList.remove("d-none");
            profile[i + 1].classList.add("d-none");
            count--;
        }
    }
};