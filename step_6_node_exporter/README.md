# Step 6 

The goal of this step is start using prometheus with some data.

We are going to use something called node exporter that will monitor the performance of the docker and send it to prometheus.

## Use Node Export

- [ ] Read the Github of [Node Exporter](https://github.com/prometheus/node_exporter)
- [ ] Add in your `docker-compose.yaml` a service called `node exporter` with the image `prom/node-exporter:latest`
- [ ] Expose port 9100 to the node exporter
- [ ] Add `/proc`, `/sys` and `/` to the node exporter volumes
- [ ] Add the commands that allow node export to watch `/proc`, `/sys` and `/`
- [ ] In `prometheus.yml` add the node exporter configuration in order to tell prometheus to use the node exporter to monitor the docker


## Tips

<details>
    <summary>Tip 1</summary>

```yaml
node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"
```

</details>
<details>
    <summary>Tip 2</summary>

```yaml
node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
```

</details>
<details>
    <summary>Tip 3</summary>

```yaml
node-exporter:
    image: prom/node-exporter:latest
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.rootfs=/rootfs'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)'
```
</details>
<details>
    <summary>Tip 4</summary>

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
```
</details>

## Answer

<details>
    <summary>Docker Compose</summary>

```yaml
version: '3.8'
  

services:
  app:
    build: ./app
    ports:
      - "3000:3000"
  node-exporter:
    image: prom/node-exporter:latest
    container_name: node-exporter
    restart: unless-stopped
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.rootfs=/rootfs'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)'
    ports:
      - 9100:9100

  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    restart: unless-stopped
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
    ports:
      - 9090:9090
```

</details>
<details>
    <summary>prometheus.yml</summary>

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
```
