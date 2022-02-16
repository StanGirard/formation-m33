# Step 3

The goal of this step is to create a new route that will be compute intensive. 
We are going to create a route that will take a number and return the fibonacci sequence of that number.

## Create a route

Your `app.js` file should look like this:
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
```

## Todo

- [ ] Add a route `fibo` that takes a number and returns the fibonacci sequence of that number.

## Tips

<details>
    <summary>Tip 1</summary>

- `app.get('/fibo/:number', (req, res) => {` : This will create a route that takes a number and returns the fibonacci sequence of that number.

</details>
<details>
    <summary>Tip 2</summary>
    
- `const number = parseInt(req.params.number)`

- `res.send(fibonacci(req.params.number))` : This will send the fibonacci sequence of the number to the client.

</details>
<details>
    <summary>Tip 3</summary>

- `const fibonacci = (number) => {` : This will create a function that will compute the fibonacci sequence of a number.

</details>
<details>
    <summary>Tip 4</summary>

```js
if (number < 2) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
```
</details>

## Answer

<details>
    <summary>Answer</summary>
    
```js
const express = require('express')
const app = express()
const port = 3000

const fibonacci = (number) => {
    if (number < 2) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}

app.get('/fibo/:number', (req, res) => {
    const number = parseInt(req.params.number)
    const result = fibonacci(number)
    res.send(`Fibonacci of ${number} is ${result}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

</details>

## Go to next step

Make sure that you have the following files in your project:
- [ ] `Dockerfile`
- [ ] `app.js`
- [ ] `package.json`
- [ ] localhost:3000/fibo/5 returns `Fibonacci of 5 is 8`

Your achitecture should look like this
```
root_folder
    |_____ Dockerfile
    |_____ app.js
    |_____ package.json
```