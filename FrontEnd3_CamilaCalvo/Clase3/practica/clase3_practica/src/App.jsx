import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


/* 
# Practica clase 3!

### Practica de github

1. Crear un nuevo proyecto con [Vite](https://vitejs.dev/guide/)

2. Crea un nuevo repositorio en [Github](https://github.com)
Asegurate de que el `.gitingore` contenga `node_modules`

3. Sube el proyecto a github

4. Realiza cambios en algun archivo y fijate como se visualiza en el source control de vscode

5. Agrega un nuevo archivo `.env` en el `src` y vuelve a observar los cambios

6. Agrega `.env` al `.gitignore` y vuelve a observar los cambios

---

### Practica de ESLint

1. Instala [ESLint](https://eslint.org/docs/latest/use/getting-started)
`npm init @eslint/config`

**How would you like to use ESLint?** To check syntax and find problems

**What type of modules does your project use?** JavaScript modules (import/export)

**Which framework does your project use?** React

**Does your project use TypeScript?** No

**Where does your code run?** Browser

**What format do you want your config file to be in?** JSON


2. Mira el archivo App. Tendra errores ahora
Deshabilita la regla react/react-in-jsx-scope
Ve al archivo `.eslintrc.json` y agrega la siguiente linea en `rules`
`"react/react-in-jsx-scope": "off"`

3. Vuelve a mirar el archivo App. los anchors tendran errores ahora
si no ves esto agrega el siguiente codigo
```html
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
```
Si hovereas sobre el error veras que te dice que no se puede usar `target="_blank"` sin `rel="noopener noreferrer"`, puedes hacer click en el error si quieres mas informacion

4. Resuelve el error agregando `rel="noopener noreferrer"` al anchor

5. Declara una variable y no la uses, mira el error que te da eslint

6. Escribe el siguiente codigo y mira el error que te da eslint

```js
<CustomComponent />
```

7. Escribe el siguiente codigo y mira el error que te da eslint

```js
const ovgekt = {
  neim: 'nonvre'
  heda  25,
}
```

---

### Practica de dependencias

1. Instala la siguiente dependencia [is-odd](https://www.npmjs.com/package/is-odd)
`npm i is-odd`
2. Utiliza la biblioteca en el proyecto
`import isOdd from 'is-odd';`
`console.log(isOdd(1)); //=true`
 */