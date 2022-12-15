ADDENDUM: workflow is: init with npm; create index.js (optionally index.html); install webpack to enable module system; install babel/preset-react; install react
ADDENDUM: webpack is a module system (or module bundler in the parlance of web dev). Took me long enough to realize that :'((
ADDENDUM: webpack needs a configuration file. 
ADDENDUM: webpack module bundling system doesn't work on local browser environment. Need to serve your web app to local server.
ADDENDUM: react and react-dom do not have jsx by default. You must use the babel transpiler which translates jsx into plain js.
ADDENDUM: Babel is a JS transpiler. Plugin-wise, Babel can be extended to transpile JSX. To install babel, install @babel/core (base, which doesnt do anything), @babel/preset-env (the first must-have preset for babel, which "enables transforms for ES2015+"), and babel-loader for webpack; also @babel/preset-react for JSX. Add necessary lines to package.json (and webpack.config.js for webpack). Or you can create babel.config.json. Also, install @babel/cli if you use babel in scripts.
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
TODO: Can flex work with margin and padding? Or does every setting take place in content?
ADDENDUM: Netlify requires business plan to deploy from GitLab. Heroku I cant 
ADDENDUM: Refer to the official React Router v6 doc from remix-run for examples of implementation. Please.
TODO/DONE: How to achieve react-level routing on URL bar?
ANSWER: The problem, restated, is that request is being made to /XXX instead of /. It's a surprisingly popular problem. A solution is to redirect all requests to / where react-router actually handle requests (and whatever extra steps idk, refer here https://ui.dev/react-router-cannot-get-url-refresh ). There are many implementations depending on your backend. If youre developing with webpack, add historyApiFallback to config file. If youre using http-server... No, it does not support SPA. If youre using 
ADDENDUM: JSX requires react...
ADDENDUM: Webpack only detects syntax and grammar issues.
ADDENDUM: usually you write `import {PageMain} from "../pages/main.jsx"`. If you remove the brackets it will be an error because `PageMain` will be interpreted as a substitute for `default`! Similarly, you can't export components without brackets...
ADDENDUM: React also shows errors in Console. Don't overrely on Webpack!
ADDENDUM:: Does float requires inline display?
ADDENDUM: pseudo-class??
ADDENDUM: in order for `margin-left: auto; margin-right: auto;` to work, display type must be `block` or its relatives
ADDENDUM: Imagine an outer div and multiple inner divs. If inner div has `position: absolute` then they can stack up each other, but inheritance and overflow control from outer div wont work.
ADDENDUM: A web server is an application server. An application server waits for requests to serve. Nodejs is an application server. So is .NET framework, and Mono.
ADDENDUM: Static data: on the same computer as the server. Dynamic data: the database is on another computer separated from the server
ADDENDUM: `webpack serve` does bundle source but doesn't output /dist/bundle.js. So if we use a server service other than webpack, remember to rebundle the scripts.
ADDENDUM: The problem of dividing a block into two sections. You would think that the column group should have inherited size and they will fill things out. But some glitches happened - that shouldnt happen. This got me thinking: how to really divide a block anyway? What about grid? Last time for kinte.studio I used table cells, but that sounds wrong. `display: table-cells` seems to be created for table tag.
We know that there are inner display types (flow, flex, grid...) and outer display types (block, inline, ...). Some browsers support two-value syntax, `display: <outer> <inner>;`, but Chromium certainly doesn't. MDN doesn't specify how to specify an inner display type. Fuck MDN. So I've looked at MDN and CSS-Tricks and there's no mention of specifying an inner/outer display type. Guess the flex keyword defaults to a block outer display type?
ADDENDUM: Use 100%, not 100vw. For some reasons 100vw exceeds the viewport.