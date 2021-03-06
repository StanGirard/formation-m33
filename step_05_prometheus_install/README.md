# Step 5 

The goal of this step is to add prometheus to the docker compose file.

## What is prometheus

Prometheus is a tool that can be used to monitor and manage your application.
It monitors your application and provides you with metrics that can be used to improve your application.
For example, you can set up a prometheus alert to send an email when your application is down.

More info about prometheus: https://prometheus.io/

## Add Prometheus to the docker compose file

- [ ] Add a service called `prometheus` to the docker compose file using the image `prom/prometheus:latest`
- [ ] Add a port (9090) to the `prometheus` service
- [ ] Add a volume to the `prometheus` service in order to load the configuration file `prometheus.yml`
- [ ] Add a command to the `prometheus` service that will start the prometheus server with the configuration file `prometheus.yml`

Prometheus Guide: https://prometheus.io/docs/introduction/overview/

## Tips

<details>
    <summary>Tip 1</summary>

```yaml
version: "3.8"
services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
```

</details>
<details>
    <summary>Tip 2</summary>

```yaml
services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
```

</details>

## Answer

<details>
    <summary>Answer</summary>

```yaml
version: "3.8"
services:
  app:
    container_name: app
    build: ./app
    ports:
      - "3000:3000"
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    command:
      - "--config.file=/etc/prometheus/prometheus.yml"
```
</details>

## Go to next step

- [ ] Prometheus should be available on port 9090