window.onload = function () {
    let $project = document.querySelectorAll(".project");
    let $pic = document.querySelector(".pic");
    let picW = $pic.offsetWidth + "px";
    let windowH=window.innerHeight;
    let btnTop=document.querySelector(".goto-top");
    let scrollTop;

    //Contents Responsive Height
    picHeight();
    window.addEventListener("resize", picHeight);
    function picHeight(){
        picW = $pic.offsetWidth + "px";
        for(var i=0; i<$project.length; i++){
            $project[i].querySelector("a >.pic").style.height = picW;
        }
    }

    //Scroll Top Button
    window.addEventListener("scroll", btnShow);
    function btnShow(){
        scrollTop=window.scrollY;
        if(scrollTop>windowH/2){
            btnTop.style.opacity=1;
        } else if(scrollTop<=windowH/2){
            btnTop.style.opacity=0;
        }
    }

    btnTop.addEventListener("click", scrollToTop);
    function scrollToTop(){
        document.documentElement.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
};