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
