window.addEventListener("load", () => {
    setTimeout(() => {
        var loadImg = document.getElementsByClassName('load-img')[0];
        loadImg.style.animation = "shutter-up ease-out 0.4s forwards";
    }, 1300);

    setTimeout(() => {
        var loader = document.getElementById("loader");
        loader.style.display = "none";
        var web = document.getElementById("web");
        web.style.display = "block";

        var name = document.getElementsByClassName('name')[0];
        name.style.color = "#0f141e";
        var position = document.getElementsByClassName('position')[0];
        position.style.color = "#0f141e";

    }, 1750);
})

function Width() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    console.log(scrollY);
    console.log(Width());
    if(Width() > 760){
        if(scrollY >= 912 && scrollY <= 1648){
            document.getElementsByClassName('name')[0].style.color = "white";
            document.getElementsByClassName('position')[0].style.color = "white";
            document.getElementsByClassName('top-right')[0].style.color = "white";
        }
        else{
            document.getElementsByClassName('name')[0].style.color = "#0f141e";
            document.getElementsByClassName('position')[0].style.color = "#0f141e";
            document.getElementsByClassName('top-right')[0].style.color = "#0f141e";    
        }
    }
    else {
        if(scrollY >= 780 && scrollY <= 1266){  
            document.getElementsByClassName('name')[0].style.color = "white";
            document.getElementsByClassName('position')[0].style.color = "white";
            document.getElementsByClassName('top-right')[0].style.color = "white";
        }
        else {
            document.getElementsByClassName('name')[0].style.color = "#0f141e";
            document.getElementsByClassName('position')[0].style.color = "#0f141e";
            document.getElementsByClassName('top-right')[0].style.color = "#0f141e";
        }

    }
   
     

    if(Width() > 760){
        if(scrollY >= 188 && scrollY <= 1000){
            document.getElementsByClassName('bottom-right')[0].style.color = "white";
        }
        else{
            document.getElementsByClassName('bottom-right')[0].style.color = "#0f141e";
        }
    }
    else{
        if(scrollY >= 188 && scrollY <= 672){
            document.getElementsByClassName('bottom-right')[0].style.color = "white";
        }
        else{
            document.getElementsByClassName('bottom-right')[0].style.color = "#0f141e";
        }
    }
});

function mouseIn() {
    var contactMe = document.getElementsByClassName('contactMe')[0];
    contactMe.style.display = "block";

}

function mouseOut() {
    var contactMe = document.getElementsByClassName('contactMe')[0];
    contactMe.style.display = "none";
}

function contact(){
    var cnt = document.getElementsByClassName('contact-me')[0];
    cnt.classList.add("trigger-Annimation");
    cnt.classList.remove("remove-Annimation");
    
    var flip = document.getElementsByClassName('back')[0];
    flip.classList.add("flip");
    flip.classList.remove("flip-back");

    cnt.style.display = "none";

    setTimeout(() => {
        document.getElementsByClassName('contact-body')[0].style.display = "flex";
    }, 800);
}

function closeContect(){
    var cnt = document.getElementsByClassName('contact-me')[0];
    cnt.classList.add("remove-Annimation");
    cnt.classList.remove("trigger-Annimation");
    cnt.style.display = "block";

    var back =document.getElementsByClassName('back')[0];
    back.classList.add("flip-back");
    back.classList.remove("flip");
}

function nextProject(){
    var quote = document.getElementsByClassName('prgtag1')[0];
    quote.classList.add('tag1Enter');
}