# React Typescript Boilerplate

## Prerequisites

- Node
    - Install latest version of node according to your platform's instructions
- Typescript
    - `npm install -g typescript`

## Steps

- [ ] Create npm project
    - `npm init`
- [ ] Install Webpack (Globally)
    - `npm install -g webpack`
- [ ] Install React with Types
    - `npm install --save react react-dom @types/react @types/react-dom`
- [ ] Install Typescript with Webpack Plugins
    - `npm install --save-dev typescript awesome-typescript-loader source-map-loader`
- [ ] Install Browsersync with Webpack Plugins
    - `npm install --save-dev browser-sync browser-sync-webpack-plugin`
- [ ] Install tslint React Config
    - `npm install --save-dev tslint-react`
- [ ] Add `tsconfig.json` to setup typescript

```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}
```

- [ ] Add `tslint.json` for typescript linting

```json
{
  "extends": ["tslint:latest", "tslint-react"],
  "rules": {
    // override tslint-react rules here
    "jsx-wrap-multiline": false
  }
}
```

- [ ] Add `webpack.config.js` to setup webpack (includes setup for typescript and browsersync)

```javascript
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['./']
            }
        })
    ]
};
```

- [ ] Add `index.html` to host the react app

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>React App</title>
    </head>
    <body>
        <div id="app-container"></div>

        <!-- Dependencies -->
        <script src="./node_modules/react/dist/react.js"></script>
        <script src="./node_modules/react-dom/dist/react-dom.js"></script>

        <!-- Main -->
        <script src="./dist/bundle.js"></script>
    </body>
</html>

```

- [ ] Add `src/index.tsx` for the React App entry point

```typescript
import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";

ReactDOM.render(
    <App />,
    document.getElementById("app-container")
);

```

- [ ] Add `src/app.tsx` for the React App Root

```typescript
import * as React from 'react';

export const App = () => (
    <div>
        <h3>React App</h3>
        <div>This is the root of your app</div>
    </div>
);
```

- [ ] Run (with automatic reloading on source change)
    - `webpack -w`




## References

    - https://www.typescriptlang.org/docs/handbook/react-&-webpack.html