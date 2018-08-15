# Adonis, Vue JS and Argon Boilerplate

This is the fullstack boilerplate for AdonisJs, Vue JS and Argon Design it comes pre-configured with.

1. Bodyparser
2. JWT
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. 4 Fully Designed Pages

## Setup

Clone the Repo

```bash
git clone https://github.com/devingray/node-api.git <project-name>
```

Install Dependancies

```bash
yarn
```

Prepare your database and email service

```bash 
cp .env.example .env
vim .env
~~~~~ Add your details
adonis migration:run
```

Setup the Frontend to watch for changes

```bash
yarn run watch
```

Open a new tab and run the application

```bash 
adonis serve
```

Go to http://localhost:3333 to see the application in action
