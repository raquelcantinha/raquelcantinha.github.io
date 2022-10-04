const btn = document.getElementById("back__top");
window.onscroll = function hide() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180 && window.innerWidth <= 768) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
function back__top() {
    window.scrollTo(0,0)
}