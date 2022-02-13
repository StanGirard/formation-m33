# Step 11

The goal of this step is to add blackbox exporter in order to continuously monitor the uptime of your application.


## To Do
- [ ] Add blackbox exporter to your docker compose file -> https://github.com/prometheus/blackbox_exporter
- [ ] Mount the folder config in your docker compose file in the service blackbox_exporter
- [ ] Add the command `--config.file=/config/blackbox.yml` to the blackbox_exporter service
- [ ] Update prometheus to scrape the blackbox exporter which targets your nodejs app


## Go to Next step

- In prometheus -> `up{instance=~"app:3000"}` should return 1