# React Typescript Boilerplate

## Prerequisites

- Node

## Steps

- [ ] Create npm project
    - `npm init`
- [ ] Install Webpack (Globally)
    - `npm install -g webpack`
- [ ] Install React with Types
    - `npm install --save react react-dom @types/react @types/react-dom`
- [ ] Install Typescript with Webpack Plugins
    - `npm install --save-dev typescript awesome-typescript-loader source-map-loader`
- [ ] Add tsconfig.json

```
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

- [ ] ...



## References

    - https://www.typescriptlang.org/docs/handbook/react-&-webpack.html