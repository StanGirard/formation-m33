# Step 2

The goal of this step is to build a docker container for an express app that will run a few commands.

## Create a Dockerfile

Create a docker file that will:
- Install NodeJS
- Install Express
- Run the express app on port 3000 with the command `node app.js`

## Tips

[Tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

<details>
  <summary>Tip 1</summary>
- `FROM node:latest`: This will install NodeJS
</details>
<details>
    <summary>Tip 2</summary>
- `RUN npm install `: This will install Express
</details>
<details>
    <summary>Tip 3</summary>
    - `COPY app.js /app.js`: This will copy the app.js file to the root of the container
</details>
<details>
    <summary>Tip 4</summary>
- `CMD node app.js`: This will run the express app
</details>

## Answer

<details>
  <summary>Answer</summary>

```dockerfile
FROM node:latest
WORKDIR /app

COPY ["package.json", "package-lock.json*"]

RUN npm install

COPY app.js app.js

EXPOSE 3000
CMD [ "node", "app.js" ]
```
</details>

## Go to next step

Make sure that you have the following files in your project:
- [ ] `Dockerfile`
- [ ] `app.js`
- [ ] `package.json`

Your achitecture should look like this
```
root_folder
    |_____ Dockerfile
    |_____ app.js
    |_____ package.json
```
