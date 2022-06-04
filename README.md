# homeProjectCodeSherpas

```bash
# install dependencies
$ npm install
```

### ADMIN Endpoints

| METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                         | RETURNS                                             |
| ------ | ---------------- | ----- | ----- | --------------------------- | ----------------------------------- | --------------------------------------------------- |
| POST   | /admin/users     | YES   | ADMIN | Create a new customer       | name, surname, email and birth_date | token?                                              |
| GET    | /admin/users/:id | YES   | ADMIN | Get a single customer       | customer_id                         | {customer}                                          |
| GET    | /admin/users     | YES   | ADMIN | Get all customers           | -                                   | [{customers}]                                       |
| PUT    | /admin/users/:id | YES   | ADMIN | Update all the attributes   | name, surname, email and birth_date | {customer}                                          |
| DELETE | /admin/users/:id | YES   | ADMIN | Delete an existing customer | customer_id                         | "This customer, ${customer.name}, has been deleted" |
