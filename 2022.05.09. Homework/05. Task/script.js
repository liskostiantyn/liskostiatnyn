let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

const findSymbolText = (text) => {
    return text.match(/\w\d{1,6}\w/g)
};

const symbol = findSymbolText(str);

console.log(`symbol`, symbol)

let address = "ex.ua google.com yandex.ru site.com.ua my-page.com"

const siteAddress = (text) => {
    return /[a-zA-Z0-9\.'-_]{2,}\.\w{2,}/igm.test(address);
};

const addressValid = siteAddress(address);

console.log(`addressValid`, addressValid);

let numbersSample = "133413012123412342134324"

const numbers = (numbers) => {
    return /[0-9]{12,}/igm.test(numbers);
};

const numbersValid = numbers(numbersSample);

console.log(`numbersSample`, numbersValid);