# Step 8 - K6

The goal of this step is to install K6 in order to simulate a load test.

## K6 

- [ ] Add K6 to your docker compose file
- [ ] Add the load test file `load.js` to the `k6` service as a volume
- [ ] Run the load test with `docker compose run k6 run /scripts/load.js`


## Tips

<details>
    <summary>Tip 1</summary>
https://github.com/grafana/k6/blob/master/docker-compose.yml
 </details>
<details>
    <summary>Tip 2</summary>

Don't forget to add the datasources in your Grafana dashboard. -> `datasource.yml`
    </details>
<details>
    <summary>Tip 3</summary>

Here is the datasource :D 
Add it to `grafana/provisioning/datasources/datasources.yml`

```yaml 
- name: myinfluxdb
    type: influxdb
    access: proxy
    database: k6
    orgId: 1
    url: http://influxdb:8086
    isDefault: true
```
</details>

<details>
    <summary>Tip 4</summary>

You need a dashboard now :D 
Add it to `grafana/provisioning/dashboards/dashboards.yml`
</details>

<details>
    <summary>Tip 5</summary>

Here is the dashboard link 
https://github.com/grafana/k6/tree/master/grafana
</details>

## Go to next step

You should see the metrics in Grafana after the load test in the dashboard.

![](2022-02-13-18-52-42.png)
