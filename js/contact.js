window.onload = function () {
    let windowH = window.innerHeight;
    let btnTop = document.querySelector(".goto-top");
    let scrollTop;
    let $city = document.querySelectorAll(".city");
    let $map = document.querySelector("iframe");
    let mapW = $map.offsetWidth;

    //Map Responsive Height
    iframeHeightChange();
    window.addEventListener("resize", iframeHeightChange);
    function iframeHeightChange() {
        mapW = $map.offsetWidth;
        for (var n = 0; n < $city.length; n++) {
            $city[n].querySelector("iframe").setAttribute("height", mapW / 16 * 9);
        }
    }

    //Scroll Top Button
    window.addEventListener("scroll", btnShow);
    function btnShow() {
        scrollTop = window.scrollY;
        if (scrollTop > windowH / 2) {
            btnTop.style.opacity = 1;
        } else if (scrollTop <= windowH / 2) {
            btnTop.style.opacity = 0;
        }
    }

    btnTop.addEventListener("click", scrollToTop);
    function scrollToTop() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
};