let flag = true;

burger_menu_button.onclick = function()
{
    if (flag)
    {
        // asd1.style.width = "0";
        // asd1.style.transition = "2s";

        // btn1.style.transform = "rotate(180deg)";
        // btn1.style.transition = "0.3s ease-out";
        aside.style.display = "block"

        flag = false;
    }
    else
    {
        // asd1.style.width = "12em";
        // asd1.style.transition = "2s";

        // btn1.style.transform = "rotate(0deg)";
        // btn1.style.transition = "0.3s ease-out";

        aside.style.display = "none"

        flag = true;
    }
}

document.getElementById('div_link_one').addEventListener('click', function () {
    window.location.href = './covid.html';
});

document.getElementById('div_link_two').addEventListener('click', function () {
    window.location.href = './911.html';
});

document.getElementById('div_link_three').addEventListener('click', function () {
    window.location.href = './gulfwar.html';
});