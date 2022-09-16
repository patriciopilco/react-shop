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

## Atomic Design

https://platzi.com/blog/por-que-atomic-design/

https://atomicdesign.bradfrost.com/chapter-2/



## Añadir archivos de enlace

1. Crear carpeta */src/assets*
2. Copiar iconos e imágenes 
3. Editar *webpack.config.js* * con una nueva regla
```bash
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
```
* Agrear alias en resolve
```bash
alias: {
  '@components': path.resolve(__dirname, 'src/components/'),
  '@containers': path.resolve(__dirname, 'src/containers/'),
  '@styles': path.resolve(__dirname, 'src/styles/'),
  '@icons': path.resolve(__dirname, 'src/assets/icons/'),
  '@logos': path.resolve(__dirname, 'src/assets/logos/'),
}
```

* Importamos los recursos desde el archivo .jsx haciendo uso de los alias para que webpack pueda reconocer

```bash
import '@styles/Header.scss'
import shoppingCart from '@icons/icon_shopping_cart.svg';
```

## React.useState

El estado dentro de react
1. Importar *useState* que permite trabajar con el estado, en este caso es un huk que viene en la api de react.

```bash
import React, { useState } from 'react';
```
2. Añadir la lógica antes del return

Crear una constante que contenga lo siguiente:

* estado
* funcion modificadora al elemento del estado

Luego se debe pasar el valir inicial al elemento 

* ejemplo se pasa un arreglo

```bash
const [cart,setCart] = useState([]);

```

* añadir la configuracion dentro del elemento <figure>, capturando con *onClick* para poder desencadenar algo, en nuestro caso el llamado a una función.

* Crear la función *handleClick* por convension 

```bash
    const handleClick = () => {
        setCart();
    }
```

* usar la función

```bash
				<figure onClick={ handleClick }>
					<img src={addToCart} alt="" />
				</figure>
```

## useEffect y consumo de APIs

Realizar peticiones a una API y hacer render con los productos de la tienda.

* Docs de la API 👉 https://api.escuelajs.co/docs/
* API para desarrollo 👉 https://api.escuelajs.co/api/v1/

1. Añadir API

```bash
const API = 'https://api.escuelajs.co/api/v1/products';

```

2. Añadir useEffect

* importar los elementos *useEffect*,*useState* desde la api de react

```bash
import React, { useEffect, useState } from 'react';
```
3. Llamar la información dentro del contenedor

* Crear *useState*
```bash
    const[products, setProducts] = useState([]);
```

* Crear una funcion anomina con *useEffect*

```bash
    useEffect(()=>{

    },[])
```
4. Instalar axios

```bash
npm install axios
```

5. Importar axios

```bash
import axios from 'axios';
```
6. Construir la petición a la API.

```bash
    useEffect(async()=>{
        const response = await axios(API);
        setProducts(response.data);
    },[])
```

7. Añadir lógica para iterar

```bash
 return (
        <section className='main-container'>
            <div className='ProductList'>
                {
                    products.map(
                        product => (
                            <ProductItem/>
                    ))}
            </div>
        </section>
    );
```

8. Instalar plugin a babel para no tener problemas en la peticion async await

```bash
npm install @babel/plugin-transform-runtime
``` 
9. Aplicar la configuración *.babelrc*

```bash
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
```

## Custom Hooks

1. crear carpeta *src/hooks*
2. crear funcion de código que sea reutilizable *useGetProducts.js*

```bash
import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {

    const[products, setProducts] = useState([]);

    useEffect(async()=>{
        const response = await axios(API);
        setProducts(response.data);
    },[])

    return products;
};

export default useGetProducts;
```

3. Usar funcion en el componente

```bash
import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(API);
    return (
        <section className='main-container'>
            <div className='ProductList'>
                {
                    products.map(
                        (product) => (
                            <ProductItem/>
                    ))}
            </div>
        </section>
    );
};

export default ProductList;
```

## Custom Hooks 

1. Inyectar los valor al componente *ProductItem*
```bash
 <section className='main-container'>
            <div className='ProductList'>
            {products.map(product => <ProductItem product={product} key={product.id}/>)}
            </div>
        </section>
```

2. Personalizar *ProductItem* con el parametro **product**

```bash
const ProductItem = ({product}) => {
    const [cart,setCart] = useState([]);
    const handleClick = () => {
        setCart([]);
    }
    return (
        <div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>{product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ handleClick }>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
    );
};
```

## useRef y formularios (Página Login)

UseRef es un hook utilizado para obtener una referencia a los datos de un objeto con información mutable

Lectura - 
https://developer.mozilla.org/en-US/docs/Web/API/FormData

1. Modificar la página de login
* Importar **UseRef** 
* Crear un constante y dar el valor nulo
```bash
	const form = useRef(null);
```
* Crear la referencia 
```bash
  <form action="/" className="form" ref={form}>
```
* Crear una funcion para trabajar con **formData** utilizado en el (Submit) por seguridad de la información se recomienda este método.

```bash
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}
```

* En el html se debe referenciar los id por medio del atributo **name**
```bash
<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
```
* Añadir el evento *onClick* al boton para llamar a la funcion **handleSubmit**
```bash

					<button
						onClick={handleSubmit}
						className="primary-button login-button">
						Log in
					</button>
```
* Evitar que los valores se envien por URL usando el evento **preventDefault**
```bash
	const handleSubmit = (event) => {
		event.preventDefault();
```
