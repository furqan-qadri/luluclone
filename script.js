
console.log("hello how are you");

let topButton= document.getElementById("top-button");

window.onscroll=function(){
    scrollFunction();
}

function scrollFunction(){
    if (document.body.scrollTop>160 || document.documentElement.scrollTop>160){
        topButton.style.display="block";
    }
    else{
        topButton.style.display="none";

    }
}

const goToTop = () => {
    document.body.scrollIntoView({
        behavior:"smooth"
    });
  };

topButton.addEventListener("click",
goToTop
)