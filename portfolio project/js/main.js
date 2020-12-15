//Changing 'active' class for navigation bar.
document.addEventListener('click', function (e) {
    if (e.target.parentNode.className == "nav-item") {
        var navs = document.getElementsByClassName("nav-item");
        for (let i = 0; i < navs.length; i++) {
            navs[i].className = "nav-item";
        }
        e.target.parentNode.className = "nav-item active";
    }
}, false)