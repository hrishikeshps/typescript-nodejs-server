# Typescript NodeJS Server Boilerplate

This is a project to deploy a Typescript based Node server. Whole stack is in TypeScript, giving you the advantage to code in one single language throughout your development.


## Prerequisites

1. Install "Node.js" (https://nodejs.org)
2. Package manager i.e. NPM or YARN
3. From project root folder install all the dependencies: `npm i` or `yarn i`


## Run
### Development mode with files watching

Using "concurrently", TypeScript compiler and Express server are initiated. 
Default PORT is 4466, however you can change it in the .env file.

** If using NPM **
`npm run start`

** If using YARN **
`yarn run start`

![Screenshot 2021-07-03 210104](https://user-images.githubusercontent.com/13060987/124360528-0c79d880-dc48-11eb-8c94-9a40a9fad728.png)

With the help of nodemon, any changes done in the server, will automatically trigger server to restart to show the latest updates.


## Testing Server

1) Using POSTMAN:
Create a GET request -> `http:localhost:4466/api/test` -> Hit Send

2) Using BROWSER:
In URL bar, enter `http:localhost:4466/api/test` -> Hit Enter

If you see following response, then all worked👍

`{"route":"/api/test","status":"success"}`<br><br>

Feel free to fork and push changes, I'll be more than happy to see any advancements. 
Happy Developing your next project.

**Created with ❤️ by Hrishikesh Sharma**
