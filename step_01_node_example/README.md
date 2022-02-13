# Step 1

The goal of this step is to build a docker container for an express app that will run a few commands.

---
## Installation

You need to have docker  and nodejs installed.
- [Download the latest version of Docker](https://www.docker.com/products/docker-desktop)
- [Install NodeJS](https://nodejs.org/en/download/)

---
## Start Coding

### Initialise the project

Now that you have docker and nodejs installed, you can create a new project.
```bash
$ npm init
```

This will create a `package.json` file in the root of your project.

**Install Express**:
```bash
$ npm install express --save
```

### Create an express app

[Express](https://expressjs.com/) is a framework for creating web applications.

Create a new file called `app.js` and add the following code:

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
````

Now run it using the command `node app.js`

Go to [http://localhost:3000](http://localhost:3000) and you should see the text `Hello World!`


## Go to next step

Make sure that you have the following files in your project:
- [ ] `app.js`
- [ ] `package.json`


