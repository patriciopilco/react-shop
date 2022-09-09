# react-shop

##Instalación inicial
1. crear carpeta react-shop

mkdir react-shop


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


## HTML y CSS en componentes de React

Instalar en VCode

https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

1. Crear directorio */src/containers*
2. Crear archivo */src/containers/Login.jsx* 

 * crear componentente tipo Stateless, utilizar el shorcut *rsc* react stateless

```bash
import React from 'react';
import '../styles/Login.scss';

const Login = () => {
	return (
		<div className="login">
			<div className="form-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="form">
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}
```

2. Crear archivo */src/containers/Layout.jsx* 

```bash
import React from 'react';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			{children}
		</div>
	);
}

export default Layout;
```
3. Crear archio /src/styles/_vars.scss
```bash
:root {
      --white: #FFFFFF;
      --black: #000000;
      --very-light-pink: #C7C7C7;
      --text-input-field: #F7F7F7;
      --hospital-green: #ACD9B2;
      --sm: 14px;
      --md: 16px;
      --lg: 18px;
    }

```

4. Editar *global.css*

```bash
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
  }
```


5. Crear archivo /src/styles/Login.scss

```bash
  @import url(_vars.scss);

  .login {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }
  .form-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
  }
  .logo {
    width: 150px;
    margin-bottom: 48px;
    justify-self: center;
    display: none;
  }
  .title {
    font-size: var(--lg);
    margin-bottom: 12px;
    text-align: center;
  }
  .subtitle {
    color: var(--very-light-pink);
    font-size: var(--md);
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 32px;
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .label {
    font-size: var(--sm);
    font-weight: bold;
    margin-bottom: 4px;
  }
  .input {
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 30px;
    font-size: var(--md);
    padding: 6px;
    margin-bottom: 12px;
  }
  .primary-button {
    background-color: var(--hospital-green);
    border-radius: 8px;
    border: none;
    color: var(--white);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
  }
  .login-button {
    margin-top: 14px;
    margin-bottom: 30px;
  }
  @media (max-width: 640px) {
    .logo {
      display: block;
    }
  }
```

6. Cambiar module rules 

```bash
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
```

7. Cambiar archivo *App.jsx*

```bash
import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
    return (
		<Layout>
			<Login />
		</Layout>
	);
}

export default App;
```

## React Router DOM

Nos permite separar el proyecto en diferentes secciones

1. Instalar el complemento para separar las páginas de nuestra sección

```bash
npm install react-router-dom
```

2. Realizar la configuración

* Crear carpeta */src/routes*
* Mover App.jsx a la carpeta */src/routes*
* Crear importe de recursos de *react-router-dom* como es BrowserRouter,Switch,Route

3. Encapsular por niveles la aplicación

3.1 Encapsular la aplicación en el primer nivel *BrowserRouter*, segundo nivel *Routes*, tercer nivel *Route*
```bash
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../containers/Login';
import Home from '../containers/Home';
import RecoveryPassword  from '../containers/RecoveryPassword'
import NotFound from '../containers/NotFound';
import '../styles/global.css';

const App = () => {
    return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />			
					<Route exact path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
```

4. Crear Secciones Home, NotFount
5. Añadir configuración de rutas en el archivo *webpack.config.js*

* Añadir *publicPath* 
```bash
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
```

* Añadir *historyApiFallback* para el ambiente de desarrollo
```bash
 devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "dist")
          },
        compress: true,
        port: 3006
      }
```