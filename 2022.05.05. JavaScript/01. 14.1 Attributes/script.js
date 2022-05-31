// Атрибуты vs DOM - свойства

const divExample = document.getElementById("exampleOne");
const inputExample = document.getElementById("exampleTwo");
const imgExample = document.getElementById("exampleThree");

// console.dir(divExample);
// console.dir(inputExample);
// console.dir(imgExample);

// console.log(`divExample.attributes`, divExample.attributes);
// console.log(`inputExample.attributes`, inputExample.attributes);
// console.log(`imgExample.attributes`, imgExample.attributes);

const inputAttrs = inputExample.attributes;
const placeholderAttr = inputAttrs.placeholder;

// console.dir(placeholderAttr);

for (let attr of inputAttrs) {
    const attrName = attr.name;
    const attrValue = attr.value;

    // console.log(`${attrName}: ${attrValue}`)
}

// Методы работы с атрибутами

// setAttribute - устанавливает значение атрибута, принимат
//               два аргумента: название и значение атрибута
// getAttribute - получает значение атрибута,
//                если его нет - вернет null
// hasAttribute - проверят наличие атрибута (true / false)
// removeAttribure - удаляет атрибут


const input = document.getElementById("exampleFour");
const btn = document.getElementById("attrAction");

const toggleInputDisabled = () => {
    if(input.hasAttribute('disabled')) {
        // remove
        input.removeAttribute('disabled');
    } else {
        // add
        input.setAttribute('disabled', '');
    }
}

btn.addEventListener('click', toggleInputDisabled);

// Синхронизация атрибутов и свойств


const element = document.querySelector(".example-five");

// console.log(`element.id`, element.id);
// console.log(`element.getAttribute('id')`, element.getAttribute("id"));
// console.log(`After change via propery`);
// element.id = "changed";
// console.log(`element.id`, element.id);
// console.log(`element.getAttribute('id)`, element.getAttribute('id'));
// element.setAttribute('id', 'changedAgain');
// console.log("After change via set Attribute");
// console.log(`element.id`, element.id);
// console.log(`element.getAttribute('id')`, element.getAttribute('id'));

// console.log(`input.getAttribute('value)`, input.getAttribute("value"));
// console.log(`input.value`, input.value);

// input.setAttribute('value', 'text');

// console.log(`input.getAttribute('value)`, input.getAttribute("value"));
// console.log(`input.value`, input.value);

// input.value = 'newValue';

// console.log(`input.getAttribute('value)`, input.getAttribute("value"));
// console.log(`input.value`, input.value);

// Кастомные data-* атрибуты

const prices = document.querySelectorAll('.price');

const highLightDiscountedPrice = (elem) => {
    if(elem.dataset.hasDiscount === "true") {
        elem.style.color = "red";
    }
}
prices.forEach((price) => {
    // console.log(`price.dataset`, price.dataset)
    highLightDiscountedPrice(price);
});

// Практическое задание
// - Реализовать простой функционал табов
// - При нажатии на название языка програмирования на экране
//   должен отображаться его логотип
// - один из языков должен быть выбран по умолчанию, то есть
//   хотя бы один логотип должен быть отображен
// - называни выбраного языка должно быть подсвечено жирным

const langTitle = [...document.querySelectorAll('.title')];
const langImages = [...document.querySelectorAll('.language-logo')];

const toggleLogos = () => {
    const selectedTitle = langTitle.find((title) => {
        console.log(`title.dataset`, title.dataset);
        // return.title.hasAttribute('data-selected');
        return title.dataset.hasOwnProperty('selected');
    });

    const contentValue = selectedTitle.dataset.content;

    langImages.forEach((image) => {
        if (image.dataset.title === contentValue) {
            image.removeAttribute("hidden");
        } else {
            image.setAttribute("hidden", "");
        }
    });

    console.log(`contentValue`, contentValue);
};

const handleTitleClick = (event) => {
    const currentTitle = event.target;
    console.log(`currentTitle`, currentTitle);

    const prevTitle = langTitle.find((title) => {
        return title.dataset.hasOwnProperty("selected");
    });

    prevTitle.removeAttribute('data-selected');
    currentTitle.setAttribute('data-selected', ' ');

    toggleLogos()

};

langTitle.forEach((title) => {
    title.addEventListener("click", handleTitleClick);
})

toggleLogos()
