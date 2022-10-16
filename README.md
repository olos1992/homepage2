# ALEKSANDER SKUŁA - MY FIRST WEBSITE

![Aleksander Skuła - my first website preview](images/gif2.gif)

## Table of contents

1. [Description](#description)
1. [Technologies](#technologies)
1. [Demo](#demo)
1. [Example of the JS code](#example-of-the-js-code)



## Description

This is my first website based on the [**YouCode - Frontend Developer Course**](https://youcode.pl). It contains basic information about me and my hobby.

## Technologies
The website is built with use of:

- *HTML5*
- *CSS3*
- *JavaScript*

## Example of the JS code

```js
buttonHide.addEventListener("click", () => {
    image.classList.toggle("main__imageHide")

    if (image.classList.contains ("main__imageHide")) {
        buttonHide.innerText = "POKAŻ ZDJĘCIE"
    } else {
        buttonHide.innerText = "UKRYJ ZDJĘCIE"
    }
});
```

## Demo

(https://olos1992.github.io/homepage2/)
