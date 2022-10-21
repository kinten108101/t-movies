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