window.onscroll = function (e) {
    var vertical_position = 0;
    if (pageYOffset)
        vertical_position = pageYOffset;
    else if (document.documentElement.clientHeight)
        vertical_position = document.documentElement.scrollTop;
    else if (document.body)
        vertical_position = document.body.scrollTop;
    var your_div = document.getElementById('scroll');
    if (vertical_position < 400) your_div.style.setProperty("top", "19%");
    else if (vertical_position < 1200) your_div.style.setProperty("top", "50%");
    else your_div.style.setProperty("top", "81%");
}