# Step 11

The goal of this step is to add blackbox exporter in order to continuously monitor the uptime of your application.

Blackbox exporter is a tool that can be used to monitor and manage your application.

Url: https://github.com/prometheus/blackbox_exporter


## To Do
- [ ] Add blackbox exporter to your docker compose file -> https://github.com/prometheus/blackbox_exporter
- [ ] Mount the folder config in your docker compose file in the service blackbox_exporter
- [ ] Add the command `--config.file=/config/blackbox.yml` to the blackbox_exporter service
- [ ] Update prometheus to scrape the blackbox exporter which targets your nodejs app


## Tips 

<details>
    <summary>Tip 1</summary>

`prometheus.yml`

</details>

<details>
    <summary>Tip 2</summary>

This one is hard, you need to do some remapping ;) in your prometheus.yml

</details>

<details>
    <summary>Tip 3</summary>

```yaml
  - job_name: "blackbox"
    metrics_path: /probe
    params:
      module: [http_2xx] # Look for a HTTP 200 response.
    static_configs:
      - targets:
          - http://app:3000/health
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: blackbox-exporter:9115 # The blackbox exporter's real hostname:port.
```
</details>

## Answer

<details>
    <summary>Answer</summary>

```yaml
blackbox-exporter:
    container_name: blackbox-exporter
    image: prom/blackbox-exporter
    ports:
      - "9115:9115"
    volumes:
      - "./config:/config"
    command: 
    - '--config.file=/config/blackbox.yml'
```

```yaml
  - job_name: "blackbox"
    metrics_path: /probe
    params:
      module: [http_2xx] # Look for a HTTP 200 response.
    static_configs:
      - targets:
          - http://app:3000/health
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: blackbox-exporter:9115 # The blackbox exporter's real hostname:port.
```
</details>

## Go to Next step

- [ ] In prometheus -> `up{instance=~"app:3000"}` should return 1
