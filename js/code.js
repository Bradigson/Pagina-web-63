//header
window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

setTimeout(()=>{
    let a =  document.querySelector("#q");
    let a1 =  document.querySelector("#q1");
    let a2 =  document.querySelector("#q2");
    let a3 =  document.querySelector("#q3");
    let a4 =  document.querySelector("#q4");
    let a5 =  document.querySelector("#q5");
    let a6 =  document.querySelector("#q6");
    a.style.opacity = 1;
    a1.style.opacity = 1;
    a2.style.opacity = 1;
    a3.style.opacity = 1;
    a4.style.opacity = 1;
    a5.style.opacity = 1;
    a6.style.opacity = 1;
    a.style.transition = "all 3s";
    a1.style.transition = "all 5s";
    a2.style.transition = "all 6s";
    a3.style.transition = "all 7s";
    a4.style.transition = "all 8s";
    a5.style.transition = "all 9s";
    a6.style.transition = "all 10s";

},100);
//scroll efect right
let animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++){
        let alturaScroll = animado[i].offsetTop;
        if(alturaScroll - 500  < scrollTop){
            animado[i].style.right = 0;
        }
    }
}
window.addEventListener("scroll", mostrarScroll);


//section one h1
setTimeout(()=>{
let h1 = document.querySelector("#h1");
h1.style.opacity = 1;
h1.style.animation = "animadarH1 2s forwards";
    
},100);

//section one cloud left
setTimeout(()=>{
    let cloudLeft = document.querySelector("#cloud2");

    cloudLeft.style.opacity = 1;
    cloudLeft.style.animation = "cloud2 2s forwards";
},100);

//section one moon
setTimeout(()=>{
    let moon = document.querySelector("#moon");
    moon.style.opacity = 1 ;
    moon.style.transition = "all 8s";
},100);

//setion one cloud 1
setTimeout(()=>{
    let cloud1 = document.querySelector("#cloud1");
    cloud1.style.opacity = 1;
    cloud1.style.transition = "all 13s";
},100);


//efect scroll section two left
let efectAnimadoLeft = document.querySelectorAll(".efectLet");
function mostrarEfectLeft(){
    let efectLeftScrollTop = document.documentElement.scrollTop;
    for (var i=0; i < efectAnimadoLeft.length; i++){
        let alturaScrollLeft = efectAnimadoLeft[i].offsetTop;
        if(alturaScrollLeft - 500 < efectLeftScrollTop){
            efectAnimadoLeft[i].style.left = 0;
        }
    }
}

window.addEventListener("scroll", mostrarEfectLeft);



//article two
let articletwo = document.querySelectorAll(".artmoon");
function mostrarArticleTwo(){
    let artScrollTop = document.documentElement.scrollTop;
    for (var i=0; i < articletwo.length; i++){

        let alrturaArticleTow = articletwo[i].offsetTop;
        if(alrturaArticleTow - 500 < artScrollTop){
            articletwo[i].style.opacity = 1;
            articletwo[i].style.transition = "all 4s";
            articletwo[i].classList.add("down");
        }
    }
}
window.addEventListener("scroll", mostrarArticleTwo);