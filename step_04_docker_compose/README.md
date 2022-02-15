# Step 4

The goal of this step is to create a docker compose file that will run the express app.

## Docker Compose file

- [ ] Create a docker compose file that will run the express app. `docker-compose.yaml`
- [ ] Your docker compose file should have a service called `app` that will run the express app exposing port 3000.
- [ ] move the `app.js` `dockerfile` and `package.json` in an `app` folder
- [ ] name your container `app` in your `docker-compose.yaml`
- [ ] run `docker-compose up` to start the app
- [ ] Go to [http://localhost:3000](http://localhost:3000) and you should see the text `Hello World!`

Your architecture should look like this:
```
├── app
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
└── docker-compose.yaml
```


## Tips

[Tutorial](https://docs.docker.com/compose/gettingstarted/)

<details>
    <summary>Tip 1</summary>

- `version: "3.8"`: This will set the version of the docker compose file to 3.2

</details>
<details>
    <summary>Tip 2</summary>

- `services:`: This will create a section called services

</details>
<details>
    <summary>Tip 3</summary>

- `app:`: This will create a service called app

</details>
<details>
    <summary>Tip 4</summary>

- `image: node:latest`: This will set the image to node:latest

</details>
<details>
    <summary>Tip 5</summary>

- `ports:`: This will create a section called ports

</details>
<details>
    <summary>Tip 6</summary>

- `- "3000:3000"`: This will expose port 3000 on the host machine and port 3000 on the container

</details>
<details>
    <summary>Tip 7</summary>

-  `build:`: This will create a section called build
```yaml
app:
    container_name: app
    build: ./app
```


</details>
<details>
    <summary>Tip 8</summary>

- `dockerfile: Dockerfile`: This will set the dockerfile to Dockerfile in the current directory

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
```
</details>

## Go to Next Step

- [ ] docker compose up to start the app
- [ ] Go to [http://localhost:3000](http://localhost:3000) and you should see the text `Hello World!`