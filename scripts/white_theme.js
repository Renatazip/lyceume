
const btn = document.querySelector(".change_theme");

btn.addEventListener("click", function () {
    console.log(2);
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.getElementById("lines_img").src="images/lines.svg";
        document.getElementById("star_img").src="images/star.svg";
        document.getElementById("sunny_img").src="images/sunny.svg";
        document.getElementById("header__logo").src="images/logo.svg";

    }
    else {
        document.body.classList.add('light-theme');
        document.getElementById("lines_img").src="images/lines_white.svg";
        document.getElementById("star_img").src="images/star_white.svg";
        document.getElementById("sunny_img").src="images/sunny_white.svg";
        document.getElementById("header__logo").src="images/logo_white.svg";
    }
});