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

app.listen(8080, () => console.log('Server is running on http://localhost:8080, metrics are exposed on http://localhost:8080/metrics'));
