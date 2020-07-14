# www.mojee.io

The mojee.io website

### Project setup

Install dependencies

```
yarn
```

### Development

```
yarn dev
```

Run this command inside the project directory to start a local development server. The server will start at http://localhost:8080/ with hot-reloading etc.

Install recommended plugins in VSCode. To enable GraphQL syntax highlighting for `<page-query>` and `<static-query>` blocks inside `.vue` files, make sure [GraphQL plugin](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode) is installed, then open Command Palette in VSCode by pressing `CTRL+Shift+P` and run `Vetur: Generate Grammar`. You'll need to reload VSCode for changes to take effect.

### Build

```
yarn build
```

This command will generate a static site inside a dist directory in your project.

### Explore

```
yarn explore
```

Run this command to start GraphQL Playground and explore your schema or data. Open your browser and go to `http://localhost:8080/___explore` to start exploring.
