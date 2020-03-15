![Marvel Logo](/.github/logo.png)


![Made by Michelon Souza](https://img.shields.io/badge/made%20by-Michelon%20Souza-%23f0131e) ![Version](https://img.shields.io/github/package-json/v/michelonsouza/michelonsouza.github.io?color=f0131e) ![react](https://img.shields.io/badge/react-^16.13-blue?logo=react&style=flat&color=f0131e) ![webpack](https://img.shields.io/badge/webpack-^4.42.0-blue?logo=webpack&style=flat&color=f0131e)

---
### Marvel API comsume application
The purpose of this application is to demonstrate in a simple way the consumption of Marvel API having characters and comics that they participated.

#### Online aplication
An example of the working application can be tried out by clicking on [Marvel Application](https://hungry-darwin-1f8115.netlify.com/).

#### Init Aplication
To start the application, in UNIX environments (MacOS and Linux), just run the command:

```bash
  npm run app:init
```
or
```bash
  yarn app:init
```

This command will download all project dependencies and start at `http://localhost:8080`

This command is only used to start the project for the first time, in changes or use after installing the premises, use:

```bash
  npm run dev
```
or
```bash
  yarn dev
```

OBS: It is not a requirement to use the command `app: init`, you can also use the common way of installing dependencies in js projects, just use your favorite package manager, be it` npm` or `yarn`.

#### Before using the application
Before using the application, go to https://developer.marvel.com/account and add `localhost` to your` authorized referrers`.

#### Accessing the application
To use the application, you must enter your Marvel API credentials. At the same address previously mentioned, find your `public_key` and` private_key`, both are required for access.

Go to `http://localhost:8080` and you will be taken to a" login "screen. Insert your credentials and start using them.

![login-screen](/.github/login-screen.png)

After entering your credentials, you will be presented with a screen like the image below:

![characters-screen](/.github/characters-screen.png);

Click on a line to select the desired character. A screen will appear, like the one below, containing information about the editions the character participated in. If there are no editions, a message will be displayed as "Sem fáciculos para mostrar".

![single-character-screen](/.github/single-character-screen.png)
