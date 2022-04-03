## Node-Express-Kness-Blog


## Description

## Installation

```bash
$ git clone https://github.com/MahmoudNaguib/node-express-blog
$ cd node-express-blog
$ cp .env.example .env  // then update the database configuation 
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# Run database migration
$ knex migrate:latest

# Run database seeders
$ knex seed:run
```

## Default user
```bash
Email: user1@blog.com
Password: blog@12345
```

## POSTMAN API
```bash
- create environment with variable url:localhost:8000
https://documenter.getpostman.com/view/375068/UVysxbKY
```
```