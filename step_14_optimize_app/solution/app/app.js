const express = require('express')
const client = require('prom-client');
const app = express()
const port = 3000

const ExpressRedisCache = require('express-redis-cache')
const cache = ExpressRedisCache({
  expire: 1000, // optional: expire every 10 seconds
  host: 'redis-cache'
})

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


const fibonacci = (number) => {
    if (number < 2) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}

app.get('/', cache.route(), (req, res) => {
  res.send('Hello World!')
})


app.get('/fibo/:number',
    function (req, res, next) {
    // set cache name
    res.express_redis_cache_name = 'fibo-' + req.params.number;
    next();
    },

    cache.route(),  (req, res) => {
    const end = httpRequestTimer.startTimer();
    const start = Date.now();
    const number = parseInt(req.params.number)
    const result = fibonacci(number)
    const endTime = Date.now() - start;
    end({ method: req.method, route: req.path, code: 200})
    res.send(`Fibonacci of ${number} is ${result} & took ${endTime} ms`)
})

app.get('/health', async (req, res) => {
  const end = httpRequestTimer.startTimer();
  end({ method: req.method, route: req.path, code: 200 });
  res.send('OK');
});

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})