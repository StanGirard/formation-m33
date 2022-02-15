# Step 10

The goal of this step is to add the metrics exposed from your app into prometheus using the `/metrics` endpoint

## To Do

- [ ] Update your prometheus.yml to include your application metrics


## Tips

<details>
    <summary>Tip 1</summary>

https://prometheus.io/docs/introduction/overview/

</details>

<details>
    <summary>Tip 2</summary>

`prometheus.yml` 

</details>
<details>
    <summary>Tip 3</summary>

```yaml
- job_name: "node-application-monitoring-app"
    scrape_interval: 5s
    static_configs:
      - targets: ["app:3000"]
```
</details>
## Answer

<details>
    <summary>Answer</summary>

`prometheus.yml`

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "prometheus"
    scrape_interval: 5s
    static_configs:
      - targets: ["prometheus:9090"]

  - job_name: "node"
    scrape_interval: 5s
    static_configs:
      - targets: ["node-exporter:9100"]
  
  - job_name: "node-application-monitoring-app"
    scrape_interval: 5s
    static_configs:
      - targets: ["app:3000"]
```
</details>


## Go to Next step

- [ ] Call a few times the url "localhost:3000/fibo/10" to see the metrics exposed by your application
- [ ] Then go to prometheus and check if you can see your metrics -> `http_request_duration_seconds_count{route=~"/fibo/10"}` 