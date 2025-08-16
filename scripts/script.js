fetch('header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
});
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
});
fetch('radioPopout.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('radioPopout').innerHTML = data;
});
window.onscroll = function() {
    checkHeader();
    document.getElementById("radioPopoutToggle").classList.add("rotate");
    document.getElementById("radioPopout").classList.add("radioPopoutOffscreen");
};
function checkHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        shrinkHeader();
    } else {
        growHeader();
    }
}
function shrinkHeader() {
    document.getElementsByClassName("headImage")[0].classList.add("shrink");
    document.getElementsByClassName("parentImage")[0].classList.add("shrink");
}
function growHeader() {
    document.getElementsByClassName("headImage")[0].classList.remove("shrink");
    document.getElementsByClassName("parentImage")[0].classList.remove("shrink");
}
function togglePopout() {
    document.getElementById("radioPopoutToggle").classList.toggle("rotate");
    document.getElementById("radioPopout").classList.toggle("radioPopoutOffscreen");
}
function dropdown() {
    document.getElementsByClassName("nav-menu")[0].classList.toggle("dropdown");
    shrinkHeader();
}
