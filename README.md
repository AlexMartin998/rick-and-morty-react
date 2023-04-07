# Rick adn Morty

## Features

⚡️ React.js\
⚡️ TypeScript\
⚡️ Redux Toolkit\
⚡️ RTQ Query\
⚡️ MUI\
⚡️ Vite\
⚡️ Docker

### Running the app

#### Create .env file based on .env.template

```bash
touch .env
```

#### Dev

```bash
npm i -g pnpm

pnpm i

pnpm run dev
```

#### Prod

```bash
# docker compose:
docker compose up --build -d

# docker:
docker build -t hoobak:1.0.0 .

docker run -p 8080:80 hoobak:1.0.0
```

## View demo

<a href="https://rick-morty-adrian.netlify.app" target="_blank">Demo</a>
