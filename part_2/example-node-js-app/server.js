const client = require('prom-client');
const express = require('express');
const app = express();

// Create a Registry to register the metrics
const register = new client.Registry();

client.collectDefaultMetrics({
    app: 'node-application-monitoring-app',
    timeout: 10000,
    gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
    register
});

const httpRequestTimer = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10] // 0.1 to 10 seconds
});

// Register the histogram
register.registerMetric(httpRequestTimer);


function fibonacci(n) {
    if (n < 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

app.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type', register.contentType);
    res.send(await register.metrics());
});

app.get('/fibo', async (req, res) => {
    const end = httpRequestTimer.startTimer();
    const fibo = fibonacci(req.query.n);
    end({ method: req.method, route: req.path, code: 200 });
    res.send(`fibo(${req.query.n}) = ${fibo}`);
});

app.get('/health', async (req, res) => {
    const end = httpRequestTimer.startTimer();
    end({ method: req.method, route: req.path, code: 200 });
    res.send('OK');
});

app.listen(8080, () => console.log('Server is running on http://localhost:8080, metrics are exposed on http://localhost:8080/metrics'));
