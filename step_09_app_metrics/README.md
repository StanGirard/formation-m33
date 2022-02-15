# Step 9

The goal of this step is to add metrics to our nodejs application that can be queried throught a request. In order to do so, we are going to install a new package called `prom-client` that will allow us to monitor the nodejs application.

## To Do

- [ ] Add Prom Client to your nodejs application `npm install --save prom-client`
- [ ] Add this code to your nodejs application

```js
const { client } = require('prom-client');
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

register.registerMetric(httpRequestTimer);

app.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type', register.contentType);
    res.send(await register.metrics());
});

app.get('/health', async (req, res) => {
    const end = httpRequestTimer.startTimer();
    end({ method: req.method, route: req.path, code: 200 });
    res.send('OK');
});
```

- [ ] Add this code to your nodejs `fibo` endpoint -> Example

```js
const end = httpRequestTimer.startTimer();
<fibo code>
end({ method: req.method, route: req.path, code: 200 });
res.send(`<fibo output>`);
```

## Next Steps

- [ ] `https://localhost:3000/metrics` returns some metrics
- [ ] `https://localhost:3000/health` returns `OK`