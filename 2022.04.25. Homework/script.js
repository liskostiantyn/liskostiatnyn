const products = [  
  {name: "Iphone 12", brand: "Apple", price: 3200000, properties: ["Best camera", "Fast memory", "Apple A12 Processor"],},
  {name: "Galaxy S20 Ultra", brand: "Samsung", price: 2900000, properties: ["120 hz screen", "Water resistance"],},
  {name: "MI 9", brand: "Xiaomi", price: 1300000, properties: ["Best price", "Pay less - get more!"], },
];
products.forEach((product) => {
  // console.log(product);

  const itemContainer = document.createElement('div');
  const titleItem = document.createElement('h2');
  const subtitleItem = document.createElement('h3');

  titleItem.innerText = product.name;
  subtitleItem.innerText = product.brand;

  console.log(product.name);
  console.log(product.brand);

  document.body.append(titleItem);
  document.body.append(subtitleItem);


  const createList = product.properties;
  const renderList = (app) => {
    const list = document.createElement('ul');

    app.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.innerText = item;
      
      list.append(listItem);
    });

    console.dir(list);
    document.body.append(list);

   }
   
  renderList(createList);

});


