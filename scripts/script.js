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
window.onscroll = function() {
    shrinkHeader();
};
function shrinkHeader() {
    const headImage = document.getElementsByClassName("headImage")[0];
    const parentImage = document.getElementsByClassName("parentImage")[0];
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headImage.classList.add("shrink");
        parentImage.classList.add("shrink");
    } else {
        headImage.classList.remove("shrink");
        parentImage.classList.remove("shrink");
    }
}
function dropdown() {
    document.getElementsByClassName("nav-menu")[0].classList.toggle("dropdown");
}
