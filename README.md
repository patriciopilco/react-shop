# react-shop

##Instalación inicial
1. crear carpeta react-shop
```bash
mkdir react-shop
```bash

2. Inicializar
* git init
* npm init

nombre
version
descripcion: react eshop
entry point: src/index.js
test
git repository
Keywords: react, javascript
author: Patricio Pilco <pattopilco@gmail.com>
license: MIT

3. Instalar las principales dependencias

npm install react react-dom


4. Crear la estructura del proyecto

src (Donde va estar todo el código)
src/index.js
src/components (Donde van estar los componentes)
src/components/App.jsx
public (elementos publicos que se pueden compartir en el compilado )
public/index.html

5. Utilizar shorcut para desarrollar de manera mas rápida las aplicaciones react *Reactjs code snippets*
imr (import react)
slr (crear stateless component)

6. Editar el archivo que se encuentra en la raíz inicial *index.js*

import React from 'react'
import ReactDOM from 'react'
import App from './components/App'

const app = document.getElementById("app");
ReactDOM.createRoot(app).render(<App/>);

## Configuración Webpack Babel

1. Instalar dependencias

npm install @babel/core @babel/preset-env @babel/preset-react
npm install webpack webpack-cli webpack-dev-server

2. Trabajar con pluings y loaders

(1) loader para babel
(1) loader para html 
(1) plugin para html

npm install babel-loader html-loader html-webpack-plugin -D

3. Crear archivos

* .babelrc

```bash
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
* webpack.config.js

```bash
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
       extensions: ['.js', '.jsx'] ,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                    
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
          },
        compress: true,
        port: 3006
      }
}
```

## Configuración de cambios en tiempo real con webpack

1. Editar archivo package.json

```bash
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open",
    "build": "webpack --mode production"
  },
```

2. Editar archivo index.html

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantilla React</title>
</head>
<body>
   <div id="app"></div> 
</body>
</html>

```

3. Iniciar el comando 

```bash
npm run start
```


## React con CSS y Sass

1. Instalar dependencias en modo desarrollo
```bash
npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D
```

2. Editar *webpack.config.js*

* Añadir constante
```bash
const MiniCssExtractPlugin = require (mini-css-extract-plugin);

``` 
* Añadir regla module
```bash
    {
        test:/\.s[ac]ss$/i,
        use:["style-loader","css-loader","sass-loader",],
    }

```
* Añadir plugin
```bash

new MiniCssExtractPlugin({
filename: '[name].css'
}),

```

3. Crear directorio */src/styles*
4. Crear archivo */src/styles/global.scss*

```bash
$base-color : #FF0000;
$color : rgba(black,0.88);

body {
    background-color: $base-color;
    color: $color;
}
```
5. Importar el arhivo desde el componente *App.jsx*

```bash
import '../styles/global.scss';
```





