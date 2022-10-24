{
        const mainButton = document.querySelector(".js-mainButton");
        const image = document.querySelector(".js-image");
        const buttonHide = document.querySelector(".js-buttonHide");

    const welcome = () => {
        console.log("Witaj deweloperze!");
    }

    const onChangeBackgroundClick = () => {
        const bodyElement = document.querySelector(".js-body");
        const bodyHeader = document.querySelector(".js-bodyHeader");
        const bodySubHeader = document.querySelector(".js-bodySubheader");
        const navigation = document.querySelector(".js-nav");
        const navigationLink = document.querySelector(".js-navLink");
        const mainElement = document.querySelector(".js-main");
        const occupation = document.querySelector(".js-occupation");
        const dropcap = document.querySelector(".js-dropcap");
        const tableCaption = document.querySelector(".js-caption");
        const tableCell = document.querySelector(".js-tableCell");
        bodyElement.classList.toggle("body--contrast");
        bodyHeader.classList.toggle("body__header--contrast");
        bodySubHeader.classList.toggle("body__subHeader--contrast");
        navigation.classList.toggle("navigation--contrast");
        navigationLink.classList.toggle("navigation__link--contrast");
        mainButton.classList.toggle("main__button--contrast");
        mainElement.classList.toggle("main--contrast");
        occupation.classList.toggle("article__occupation--contrast");
        dropcap.classList.toggle("article__dropcap--contrast");
        image.classList.toggle("main__image--contrast");
        tableCaption.classList.toggle("table__caption--contrast");
        tableCell.classList.toggle("table__cell--contrast");
    };

    const onChangeTextClick = () => {

        if (mainButton.classList.contains("main__button--contrast")) {
            mainButton.innerText = "NORMALNY WIDOK STRONY";
        } else {
            mainButton.innerText = "WYSOKI KONTRAST STRONY";
        }
    }

    const imageHide = () => {

        const buttonHide = document.querySelector(".js-buttonHide");

        image.classList.toggle("main__imageHide")

        if (image.classList.contains("main__imageHide")) {
            buttonHide.innerText = "POKAŻ ZDJĘCIE"
        } else {
            buttonHide.innerText = "UKRYJ ZDJĘCIE"
        }
    }

    const init = () => {

        const mainButton = document.querySelector(".js-mainButton");

        mainButton.addEventListener("click", onChangeBackgroundClick);
        mainButton.addEventListener("click", onChangeTextClick);
        buttonHide.addEventListener("click", imageHide);

        welcome();
    };

    init();

}


