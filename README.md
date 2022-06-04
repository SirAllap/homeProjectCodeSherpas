# homeProjectCodeSherpas

```bash
# install dependencies
$ npm install
```

### ADMIN Endpoints

| METHOD | ENDPOINT       | TOKEN | ROLE | DESCRIPTION                 | POST PARAMS                         | RETURNS                                             |
| ------ | -------------- | ----- | ---- | --------------------------- | ----------------------------------- | --------------------------------------------------- |
| POST   | /customers     | -     | -    | Create a new customer       | name, surname, email and birth_date | {customer}                                          |
| GET    | /customers/:id | -     | -    | Get a single customer       | customer_id                         | {customer}                                          |
| GET    | /customers     | -     | -    | Get all customers           | -                                   | [{customers}]                                       |
| PUT    | /customers/:id | -     | -    | Update all the attributes   | name, surname, email and birth_date | {customer}                                          |
| DELETE | /customers/:id | -     | -    | Delete an existing customer | customer_id                         | "This customer, ${customer.name}, has been deleted" |
