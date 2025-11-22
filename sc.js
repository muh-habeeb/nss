window.addEventListener("load",()=>{

    document.querySelector("header").style.display ="none";
    document.querySelector(".body").style.display ="none";
    setTimeout(()=>{
        document.querySelector(".body").style.display ="block";
        document.querySelector(".loader").style.display ="none";
        document.querySelector("header").style.display ="flex";

    },110);
})
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Came Back :)" ;
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})


function list(){
    // var humb =document.querySelector(".humburger");
    var hamburger = document.querySelector(".hamburger");
    var nav =document.querySelector(".navbar");
    nav.classList.toggle("down");
    hamburger.classList.toggle("is-active");
}
// active class in nave
