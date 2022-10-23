ADDENDUM: workflow is: init with npm; create index.js (optionally index.html); install webpack to enable module system; install babel/preset-react; install react
ADDENDUM: webpack is a module system (or module bundler in the parlance of web dev). Took me long enough to realize that :'((
ADDENDUM: webpack needs a configuration file. 
ADDENDUM: webpack module bundling system doesn't work on local browser environment. Need to serve your web app to local server.
ADDENDUM: react and react-dom do not have jsx by default. You must use the babel transpiler which translates jsx into plain js.
ADDENDUM: to install babel, install @babel/core (base), @babel/preset-env (the first must-have preset for babel, which enables smart transpilation), and babel-loader for webpack; also @babel/preset-react for JSX. Add necessary lines to package.json (and webpack.config.js for webpack)
ADDENDUM: install style-loader and css-loader to load css files. In webpack config, remember to put style-loader BEFORE css-loader. The roles of these two webpack loaders remain unclear.
ADDENDUM: stateful classes have been replaced with stateless functions with hooks
ADDENDUM: Functions have to be CamelCased in order to be recognized as React components
ADDENDUM: substitution in tag doesn't require brackets
TODO: What is the scope of const, var, and let??
TODO: Should I use class or function?
ADDENDUM: To fit an image into a horizontal card, I separated the thumbnail into a separated div. Set thumbnail to size of card (100%). Then set `background-size: 100% auto;`
ADDENDUM: To solve a problem where the wrapper doesnt fill the page vertically, use `min-height: 100%`
ADDENDUM: Set margin and padding of body to 0. Please.
ADDENDUM: inherit is from parent. initial is default from browser. unset is a mix of both
ADDENDUM: Use `display:flex;`. It adds *better* alignment support.
ADDENDUM: Netlify requires business plan to deploy from GitLab. Heroku I cant 
ADDENDUM: Refer to the official React Router v6 doc from remix-run for examples of implementation. Please.
TODO/DONE: How to achieve react-level routing on URL bar?
ANSWER: The problem, restated, is that request is being made to /XXX instead of /. It's a surprisingly popular problem. A solution is to redirect all requests to / where react-router actually handle requests (and whatever extra steps idk, refer here https://ui.dev/react-router-cannot-get-url-refresh ). There are many implementations depending on your backend. If youre developing with webpack, add historyApiFallback to config file. If youre using http-server... No, it does not support SPA. If youre using 
ADDENDUM: JSX requires react...
ADDENDUM: Webpack only detects syntax and grammar issues.
ADDENDUM: usually you write `import {PageMain} from "../pages/main.jsx"`. If you remove the brackets it will be an error because `PageMain` will be interpreted as a substitute for `default`! Similarly, you can't export components without brackets...
ADDENDUM: React also shows errors in Console. Don't overrely on Webpack!