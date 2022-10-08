console.log("Witaj deweloperze!");

let navigationButton = document.querySelector(".js-navButton");
let bodyElement = document.querySelector(".js-body");
let bodyHeaderH1 = document.querySelector(".js-bodyHeader");
let bodyHeaderH2 = document.querySelector(".js-bodySubheader");
let navigation = document.querySelector(".js-nav");
let navigationLink = document.querySelector(".js-navLink");
let mainElement = document.querySelector(".js-main");
let occupation = document.querySelector(".js-occupation");
let dropcap = document.querySelector(".js-dropcap");
let image = document.querySelector(".js-image");
let tableCaption = document.querySelector(".js-caption");
let tableCell = document.querySelector(".js-tableCell");
let buttonHide = document.querySelector(".js-buttonHide");

navigationButton.addEventListener("click", () => {
    bodyElement.classList.toggle("body--contrast")
    bodyHeaderH1.classList.toggle("body__header--contrast")
    bodyHeaderH2.classList.toggle("body__subHeader--contrast")
    navigation.classList.toggle("navigation--contrast")
    navigationLink.classList.toggle("navigation__link--contrast")
    navigationButton.classList.toggle("navigation__button--contrast")
    mainElement.classList.toggle("main--contrast")
    occupation.classList.toggle("article__occupation--contrast")
    dropcap.classList.toggle("article__dropcap--contrast")
    image.classList.toggle("main__image--contrast")
    tableCaption.classList.toggle("table__caption--contrast")
    tableCell.classList.toggle("table__cell--contrast")

    if (navigationButton.classList.contains("navigation__button--contrast")) {
        navigationButton.innerText = "NORMALNY WIDOK STRONY";
    } else {
        navigationButton.innerText = "WYSOKI KONTRAST STRONY";
    }
});

buttonHide.addEventListener("click", () => {
    image.classList.toggle("main__imageHide")

    if (image.classList.contains ("main__imageHide")) {
        buttonHide.innerText = "POKAŻ ZDJĘCIE"
    } else {
        buttonHide.innerText = "UKRYJ ZDJĘCIE"
    }
});