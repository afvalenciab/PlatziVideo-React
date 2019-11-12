import dotenv from 'dotenv';
import getManifest from '../getManifest';

dotenv.config();
const files = getManifest();
let mainCSS;
let mainJS;
let vendorJS;
console.log(process.env.NODE_ENV === 'development');
if (process.env.NODE_ENV === 'development') {
  mainCSS = 'assets/app.css';
  mainJS = 'assets/app.js';
  vendorJS = 'assets/vendor.js';
} else {
  mainCSS = files['main.css'];
  mainJS = files['main.js'];
  vendorJS = files['vendors.js'];
}

const render = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">  
      <link rel="stylesheet" href="${mainCSS}" type="text/css">
      <title>PlatziVideo</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="${mainJS}" type="text/javascript"></script>
      <script src="${vendorJS}" type="text/javascript"></script>
    </body>
    </html>
  `);
};

export default render;
