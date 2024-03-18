# create-malagu

> fork from [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

The recommended way to start a Malagu project

> [!IMPORTANT] 
> requires Node.js 16.20.0 or higher

## Usage

```bash
# With NPM
$ npm create malagu@latest

# With YARN
$ yarn create malagu@latest

# With PNPM
$ pnpm create malagu@latest
```

Note that the tag name (`@latest`) MUST NOT be omitted, otherwise `npm` may resolve to a cached and outdated version of the package.

## Usage official templates

```bash
# With NPM
$ npm create malagu@latest -- -t backend-app

# With YARN
$ yarn create malagu@latest -t backend-app

# With PNPM
$ pnpm create malagu@latest -t backend-app
```

| Template         | Description          |
| ---------------- | -------------------- |
| backend-app      | Backend application  |
| sample-app       | Sample application   |
| malagu-component | Malagu component     |
| docker-app       | Docker application   |
| monorepo         | Monorepo             |
| nest-app         | NestJS application   |
| nextjs-app       | NextJS application   |
| koa-app          | Koa application      |
| vue-app          | Vue application      |
| database-app     | Database application |
| jwt-app          | JWT application      |
| accounts         | Accounts application |
| schedule         |                      |
| admin-app        |                      |
| microservice     |                      |
| standalone-app   |                      |
| file-service     |                      |
| puppeteer        |                      |
| mycli            |                      |

There's more.
