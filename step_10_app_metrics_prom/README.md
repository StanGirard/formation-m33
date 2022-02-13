# Step 10

The goal of this step is to add the metrics exposed from your app into prometheus using the `/metrics` endpoint

## To Do

- [ ] Update your prometheus.yml to include your application metrics


## Go to Next step

- Call a few times the url "localhost:3000/fibo/10" to see the metrics exposed by your application
- Then go to prometheus and check if you can see your metrics -> `http_request_duration_seconds_count{route=~"/fibo/10"}` 