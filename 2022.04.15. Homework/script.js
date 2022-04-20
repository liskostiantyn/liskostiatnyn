const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    {id: 1, author: "Сергій Жадан", name: "Капітал", isReading: false},
    {id: 2, author: "Юрій Андрухович", name: "Перверзія", isReading: false},
    {id: 3, author: "Богдан-Ігор Антонич", name: "Зелена Євангелія", isReading: false},
    {id: 4, author: "Тарас Шевченко", name: "Кобзар", isReading: false},
    {id: 5, author: "Іван Франко", name: "Мойсей", isReading: false},
];

function library() {
    let action = prompt('Виберіть дію: Взяти книгу - введіть "take"; Повернути книгу - введіть "return"; Добавити книгу - введіть "add"');

    if(action === null) {
        alert('До побачення!');

        return;
    }

    action = action.toLowerCase();
    action = action.trim();

    switch(action) {
        case 'take':
            takeBook()
            break;
        case 'return':
            returnBook()
            break;
        case 'add':
            addBook()
            break;
        default:
            alert("Не зроблено ніякої дії!");
    }
};

const takeBook = () => {
    console.log("take");
    
    const availableBooksNames = books
    .filter((book) => !book.isReading)
    .map((book) => `- ${book.name}`)
    .join(`\n`)

    let desiredBookName = prompt(`Введіть назву книгиe:\n${availableBooksNames}`)
    
    if(!desiredBookName) {
        alert('Не введена назва книги');

        return;
    }

    desiredBookName = desiredBookName.trim();
    desiredBookName = desiredBookName.toLowerCase();

    const desiredBook = books.find((book) => {
        return book.name.toLowerCase() === desiredBookName
    });

    if (!desiredBook) {
        alert('Не має книги з такою назвою');

        return;
    }

    if(desiredBook.isReading) {
        alert('Вибачте, але ця книга зараз читається');

        return;
    }

    desiredBook.isReading = true;

    alert(`Дякую! Вашої книги id є ${desiredBook.id}`);

    console.log(`books`, books);
};
const returnBook = () => {
    const returningBookId = Number(prompt('Введіть книги id'));

    if(!returningBookId) {
        alert('Книги id не введено');

        return;
    }

    const currentBook = books.find((book) => book.id === returningBookId);

    if (!currentBook) {
        alert('Неправильний книги id');

        return;
    }

    if (!currentBook.isReading) {
        alert('Ця книга зараз не читається');

        return;
    }

    currentBook.isReading = false;
    alert(`Дякуємо, приходьте ща раз! Вам сподобалась книга "${currentBook.name}"?`);
};

const addBook = () => {
   const name = prompt('Введіть назву книги');
   const author = prompt('Введіть автора');

   const newBook = {
       name,
       author,
       isReading: false,
       id: generateBookId(),
   };

   console.log(`newBook`, newBook);
   books.push(newBook);

   alert(`Книжка добавлена! Книжки id: ${newBook.id}`);
};

function generateBookId () {
    let isBookWithIdExists = true;
    let generatedId;

    do {
        generatedId = Math.ceil(Math.random() * 1000);
        isBookWithIdExists = Boolean(books.find((book) => book.id === generatedId));
    } while(isBookWithIdExists);

    return generatedId;

};