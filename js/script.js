window.addEventListener("load", function () {

    const buttonChangeTheme = document.querySelector(".change-theme");

    buttonChangeTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        
    })
})