const {faker} = require('@faker-js/faker');

let database = {products: []};

for (let i = 1; i <= 300; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?product",
        quantity: faker.random.numeric(3)
    });
}

console.log(JSON.stringify(database));
