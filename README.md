# React Lite Starter kit (JavaScript Version)

A lightweight, fast, and customizable React starter kit. This minimalist toolkit gives you full control over your React application without the overhead of Create React App or Vite.

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2021-F7DF1E?logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-5.x-8DD6F9?logo=webpack&logoColor=black)
![ESBuild](https://img.shields.io/badge/ESBuild-0.x-FFCF00?logo=esbuild&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-8.x-4B32C3?logo=eslint&logoColor=white)

## Features

- ⚡ **Lightning fast** builds with esbuild-loader (10-100x faster than babel-loader)

- 📦 **Optimized bundle size** with modern Webpack 5 configuration

- 🧹 **ESLint** configured with strict best practices

- 🔄 **Hot Module Replacement** for rapid development

- 🧩 **Code Splitting** built-in for optimal loading

- 🌲 **Tree Shaking** to eliminate unused code

- 🎛️ **Fully customizable** - add only what you need

- 📝 **JSDoc support** for better IDE integration

## Quick Start

```bash

# Clone the repository

git clone https://github.com/yourusername/react-lite-app-startkit.git

cd react-lite-app-startkit



# Install dependencies

npm install



# Start development server

npm start

```

Visit `http://localhost:3000` to see your app in action.

## Available Scripts

- `npm start` - Start the development server

- `npm run build` - Build for production (output to `dist` folder)

- `npm run build:win` - Build for production on Windows

- `npm run lint` - Check for linting issues

- `npm run lint:fix` - Fix automatic linting issues

## Project Structure

```

react-lite-app-startkit/

├── public/ # Static files

│ └── index.html # HTML template

├── src/ # Source code

│ ├── components/ # React components

│ ├── App.jsx # Main App component

│ └── index.js # Application entry point

├── .eslintrc.js # ESLint configuration

├── .gitignore # Git ignore rules

├── package.json # Dependencies and scripts

└── webpack.config.js # Webpack configuration

```

## Customization

### Adding a CSS Preprocessor

```bash

# For Sass

npm install --save-dev sass sass-loader

```

Update `webpack.config.js`:

```javascript
// Add to module.rules array
{
	test: /\.s[ac]ss$/i,
	use: [
		'style-loader',
		'css-loader',
		'sass-loader',
	],
}

```

### Adding React Router

```bash

npm install react-router-dom

```

### Using Preact for Smaller Bundle Size

```bash

npm uninstall react react-dom

npm install preact

```

Update `webpack.config.js`:

```javascript

// Add to resolve.alias

alias: {

	'react': 'preact/compat',

	'react-dom/test-utils': 'preact/test-utils',

	'react-dom': 'preact/compat',

}

```

## Performance Optimizations

### Code Splitting

```jsx
import React, { Suspense, lazy } from 'react';
// Lazy load components

const LazyComponent = lazy(() => import('./components/LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Path Aliases

In `webpack.config.js`:

```javascript

resolve: {
	alias: {
		'@components': path.resolve(__dirname, 'src/components/'),
		'@utils': path.resolve(__dirname, 'src/utils/')
	}
}

```

## Type Checking with JSDoc

Even without TypeScript, you can get type checking benefits with JSDoc:

```jsx
/**

* A button component with customizable text and click handler

*

* @param {Object} props - Component props

* @param {string} props.text - Button text

* @param {Function} props.onClick - Click handler function

* @param {string} [props.className] - Optional CSS class

* @returns {React.Element} Button component

*/

function Button({ text, onClick, className = '' }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

// Don't forget to add PropTypes

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
```

## ESLint Configuration

This starter kit comes with a comprehensive ESLint configuration that enforces best practices for React:

- Modern React patterns

- Prop validation

- Code quality with SonarJS

- Accessibility checks with jsx-a11y

- Import optimization

- Promise handling

You can customize the rules in `.eslintrc.js` to match your team's coding standards.

## Why Choose This Starter Kit?

- **Lightweight**: No unnecessary dependencies

- **Fast**: Uses esbuild-loader for near-instant builds

- **Flexible**: Easily add or remove features

- **Modern**: Built with the latest best practices

- **Maintainable**: Strong linting rules for code quality

- **Transparent**: No hidden configuration, everything is in plain sight

- **Customizable**: Full control over your tooling

## Converting to TypeScript

If you later decide to add TypeScript:

1. Install TypeScript and type definitions:

```bash

npm install --save-dev typescript @types/react @types/react-dom

```

2. Create a `tsconfig.json` file

3. Rename `.js` and `.jsx` files to `.ts` and `.tsx`

4. Update webpack configuration

See other TypeScript version of this starter kit for a complete example.

## Browser Support

This starter kit is configured to support modern browsers. For older browser support, consider adding appropriate polyfills and adjusting the Webpack configuration.

## License

MIT
