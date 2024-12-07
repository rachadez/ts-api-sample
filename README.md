# Rachadez TS API Example

## To run locally

### Requirements
* `npm`
* `node`
* `docker engine`

```bash
$ npm i
$ docker compose up -d
$ npm run dev
```

### Test a request
There is only one endpoint `/users`. It get all users created in database or create one.

```bash
# To create an user
curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"name": "john doe", "age": 30, "semester": 6}' \
    http://localhost:3000/users
```

```bash
# To get all users
curl -X GET http://localhost:3000/users
```
