 
  const products = [  
    {name: "Iphone 12", brand: "Apple", price: 3200000, properties: ["Best camera", "Fast memory", "Apple A12 Processor"],},
    {name: "Galaxy S20 Ultra", brand: "Samsung", price: 2900000, properties: ["120 hz screen", "Water resistance"],},
    {name: "MI 9", brand: "Xiaomi", price: 1300000, properties: ["Best price", "Pay less - get more!"], },
  ];

  const renderList = (productsList) => {
      const container = document.createElement('div');

      productsList.forEach((product) => {
          const itemContainer = document.createElement('div');
          const titleItem = document.createElement('h3');
          const subtitleItem = document.createElement('h3');
          const list = document.createElement('ul');

          product.properties.forEach((item) => {
              const listItem = document.createElement('li');
              listItem.innerText = item;
              list.append(listItem);
          });

          titleItem.innerText = product.name;
          subtitleItem.innerText = product.brand;

          itemContainer.append(titleItem, subtitleItem, list);
          container.append(itemContainer);
    
      });
        document.body.append(container);
  };

  renderList(products);