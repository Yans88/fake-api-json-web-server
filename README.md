# fake-api-json-web-server + JWT Auth


A Fake REST API using json-server with JWT authentication.

Implemented End-points: login,register

## Install

```bash
$ npm install
$ npm generate        => for generate data product
$ npm run start-auth
```


## How to login/register?

You can login/register by sending a POST request to

```
POST http://localhost:8000/auth/login
POST http://localhost:8000/auth/register
```
with the following data

```
{
  "email": "admin@email.com",
  "password":"123456"
}
```

You should receive an access token with the following format

```
{
   "access_token": "<ACCESS_TOKEN>"
}
```


You should send this authorization with any request to the protected endpoints

```
Authorization: Bearer <ACCESS_TOKEN>
```


## How to CRUD data products ?
### GET /products for getting the products
<pre>
curl --location --request GET 'http://localhost:8000/products' \
--header 'Authorization: Bearer ACCESS_TOKEN'
</pre>

### GET /products/ID for getting a single product by id
<pre>
curl --location --request GET 'http://localhost:8000/products/301' \
--header 'Authorization: Bearer ACCESS_TOKEN'
</pre>

### GET /products?param='' for getting the products with pagination, sort and search by keyword
<pre>
curl --location --request GET 'localhost:8000/products?_page=0&_limit=20&_sort=name&_order=asc&name=Edit' \
--header 'Authorization: Bearer ACCESS_TOKEN'
</pre>

### POST /products for creating a new product
<pre>
curl --location --request POST 'http://localhost:8000/products' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test",
    "description": "Sit minima perferendis consequatur est. Et quis quaerat nulla. Expedita placeat facilis ratione. Cupiditate aut magni qui enim nulla mollitia aut tempore dolore. Voluptatem at iste.",
    "price": "125.00",
    "imageUrl": "https://source.unsplash.com/1600x900/?product",
    "quantity": "655"
}'
</pre>

### PUT /products/ID for updating a product by id
<pre>
curl --location --request PUT 'http://localhost:8000/products/301' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test",
    "description": "Sit minima perferendis consequatur est. Et quis quaerat nulla. Expedita placeat facilis ratione. Cupiditate aut magni qui enim nulla mollitia aut tempore dolore. Voluptatem at iste.",
    "price": "125.00",
    "imageUrl": "https://source.unsplash.com/1600x900/?product",
    "quantity": "655"
}'
</pre>

### DELETE /products/ID for deleting a product by id.
<pre>
curl --location --request DELETE 'http://localhost:8000/products/301' \
--header 'Authorization: Bearer ACCESS_TOKEN'
</pre>