const express = require('express')
const app = express()
const port = 3000

const fibonacci = (number) => {
    if (number < 2) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/fibo/:number', (req, res) => {
    const number = parseInt(req.params.number)
    const result = fibonacci(number)
    res.send(`Fibonacci of ${number} is ${result}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})