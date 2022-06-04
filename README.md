# homeProjectCodeSherpas

```bash
# install dependencies
$ npm install
```

### ADMIN Endpoints

| METHOD | ENDPOINT       | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                         | RETURNS                                             |
| ------ | -------------- | ----- | ----- | --------------------------- | ----------------------------------- | --------------------------------------------------- |
| POST   | /customers     | YES   | ADMIN | Create a new customer       | name, surname, email and birth_date | {customer}                                          |
| GET    | /customers/:id | YES   | ADMIN | Get a single customer       | customer_id                         | {customer}                                          |
| GET    | /customers     | YES   | ADMIN | Get all customers           | -                                   | [{customers}]                                       |
| PUT    | /customers/:id | YES   | ADMIN | Update all the attributes   | name, surname, email and birth_date | {customer}                                          |
| DELETE | /customers/:id | YES   | ADMIN | Delete an existing customer | customer_id                         | "This customer, ${customer.name}, has been deleted" |
