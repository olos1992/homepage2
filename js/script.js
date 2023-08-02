{

    const welcome = () => {
        console.log("Witaj deweloperze!!!");
    }

    const onChangeBackgroundClick = (mainButton, image, buttonHide) => {
        const bodyElement = document.querySelector(".js-body");
        const bodyHeader = document.querySelector(".js-bodyHeader");
        const bodySubHeader = document.querySelector(".js-bodySubheader");
        const navigation = document.querySelector(".js-nav");
        const navigationLink = document.querySelectorAll(".js-navLink");
        const mainElement = document.querySelector(".js-main");
        const occupation = document.querySelector(".js-occupation");
        const dropcap = document.querySelectorAll(".js-dropcap");
        const tableCaption = document.querySelector(".js-caption");
        const tableCell = document.querySelectorAll(".js-tableCell");
        const articleHr = document.querySelector(".js-articleHr");
        bodyElement.classList.toggle("body--contrast");
        bodyHeader.classList.toggle("body__header--contrast");
        bodySubHeader.classList.toggle("body__subHeader--contrast");
        navigation.classList.toggle("navigation--contrast");
        for (const element of navigationLink) {
            element.classList.toggle("navigation__link--contrast");
        };
        mainButton.classList.toggle("main__button--contrast");
        mainElement.classList.toggle("main--contrast");
        occupation.classList.toggle("article__occupation--contrast");
        for (const element of dropcap) {
            element.classList.toggle("article__dropcap--contrast");
        };
        image.classList.toggle("main__image--contrast");
        buttonHide.classList.toggle("main__buttonHide--contrast");
        tableCaption.classList.toggle("table__caption--contrast");
        for (const element of tableCell) {
            element.classList.toggle("table__cell--contrast");
        };
        articleHr.classList.toggle("article__hr--contrast");
    };

    const onChangeTextClick = (mainButton) => {

        if (mainButton.classList.contains("main__button--contrast")) {
            mainButton.innerText = "NORMALNY WIDOK STRONY";
        } else {
            mainButton.innerText = "WYSOKI KONTRAST STRONY";
        }
    }

    const hideImage = (image, buttonHide) => {

        image.classList.toggle("main__imageHide");

        buttonHide.innerText = image.classList.contains("main__imageHide") ? "POKAŻ ZDJĘCIE" : "UKRYJ ZDJĘCIE";

    }

    const init = () => {

        const mainButton = document.querySelector(".js-mainButton");
        const image = document.querySelector(".js-image");
        const buttonHide = document.querySelector(".js-buttonHide");

        mainButton.addEventListener("click", () => {
            onChangeBackgroundClick(mainButton, image, buttonHide);
            onChangeTextClick(mainButton);
        });

        buttonHide.addEventListener("click", () => {
            hideImage(image, buttonHide);
        });

        welcome();

    };

    init();

}