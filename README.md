# CRUD-API

#### CRUD API using in-memory database underneath.

## Technical requirements

- Node.js 24.x.x or upper
- Typescript
- npm

## Installation

1. Clone the repository
```bash
git clone <repository-url>
```
2. Navigate to the project directory:
```bash
cd CRUD-API
```
3. Install dependencies
```bash
npm i
```

## Running app
in development mode
```bash
npm run:dev
```
in production mode
```bash
npm run:prod
```

## Endpoints

### GET api/users
#### Response:
| Status: 200

| Body: [Array of users]
### GET api/users/{userId}
Status: 200 - user exist

Status: 400 - userId invalid

Status: 404 - User not found
### POST api/users
create record about new user and store it in database

#### Request Body:
```
{
  "id": ""(generated on server side)
  "username": "Jon",
  "age": 22,
  "hobbies": ["programming","reading"]
}
```
Status: 201 - newly created record

Status: 400 - body does not contain * required* fields
### PUT api/users/{userId}
update existing user

Status: 200 - user exist

Status: 400 - userId invalid

Status: 404 - User not found
### DELETE api/users/{userId}
delete existing user from database

Status: 204 - record is found and deleted

Status: 400 - userId invalid

Status: 404 - User not found
