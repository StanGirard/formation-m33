const express = require('express');
const app = express();

// Create a Registry to register the metrics

function fibonacci(n) {
    if (n < 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get('/fibo', async (req, res) => {
    const fibo = fibonacci(req.query.n);
    res.send(`fibo(${req.query.n}) = ${fibo}`);
});

app.listen(8080, () => console.log('Server is running on http://localhost:8080, metrics are exposed on http://localhost:8080/metrics'));
