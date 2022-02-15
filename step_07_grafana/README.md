# Step 7

Now that our metrics are available in Prometheus, let's add Grafana to our application.

## Add Grafana to Docker Compose

- [ ] Add a service called `grafana` to the docker compose file using the image `grafana/grafana:latest`
- [ ] Add a port (3001) to the `grafana` service
- [ ] Add a volume to the `grafana` service in order to load the configuration folder `grafana` found in this repository
- [ ] Disable the authentication for the `grafana` service
- [ ] Allow anonymous login for the `grafana` service
- [ ] Anonymous logedin users will have to be Admin
- [ ] Create a dashboard that monitors the cpu / ram usage of the application


## Tips

<details>
    <summary>Tip 1</summary>

- Grafana exposes port 3000. Use a remapping to expose port 3001

</details>
<details>
    <summary>Tip 2</summary>

- the volume that you need to mount to is `/etc/grafana/provisioning`

</details>
<details>
    <summary>Tip 3</summary>

- Look at the environment values `GF_AUTH*`

</details>
<details>
    <summary>Tip 4</summary>

- GF_AUTH_DISABLE_LOGIN_FORM=true
- GF_AUTH_ANONYMOUS_ENABLED=true
- GF_AUTH_ANONYMOUS_ORG_ROLE=Admin

</details>

## Answer

<details>
    <summary>Answer</summary>

```yaml
grafana:
    image: grafana/grafana:latest
     ports:
      - 3001:3000
    volumes:
      - ./grafana/provisioning:/etc/grafana/provisioning
    environment:
      - GF_AUTH_DISABLE_LOGIN_FORM=true
      - GF_AUTH_ANONYMOUS_ENABLED=true
      - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
```
</details>



Your architecture should look like this:
```
├── app
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
└── docker-compose.yaml
└── grafana
    ├── provisioning
    └── dashboards
└── prometheus.yml
```

## Go to next step

- [ ] http://localhost:3001/d/rYdddlPKk/node-exporter?orgId=1&refresh=1m should have the metrics from Node Exporter
- [ ] You have a custom dashboard created that monitors the CPU and the RAM of the application.

Questions? 
- Why is there only 2Gb memory available ?
- Why don't you see more storage available in Node Exporter metrics ?


