# Oil Gas Dashboard

This is a dashboard that displays data from sensors, simulating a Gas and Oil industry, that comes from an API.

The Back-end has a exclusive Repository which you can find at:

- [Back-end Repository](https://github.com/gvalluis-dev/oil-gas-api) 

## Steps to run the application

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Clone the Dashboard Repo (this one) [Visual Code is recommended]
- Run "npm install"
- Run "npm run dev"
- Clone the [Back-end Repository](https://github.com/gvalluis-dev/oil-gas-api) 
- Start it using Visual Studio
- It will open the [Swagger Page](https://localhost:7279/swagger/index.html) , which displays the explanation of what everything does 
- Check if the API localhost code is the correct (7279)
- Once both, front and back, are running, you should be able to see the Dashboard with real data

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
