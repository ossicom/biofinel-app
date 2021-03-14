1. Zuerst Template in Html erstellen
2. Mit CSS stylen
3. Bilder für die Webseite vorbereiten
4. Mit Create React app die react app erstellen
5. Produkt Komponent zufügen
6. Produkt detail seite erstellen

   1. Install react router dom
   2. Use BrowserRouter and Route for Home screen
   3. Create HomeScreen.js
   4. Add product list code there
   5. Create ProductScreen.js
   6. Add new Route from product details to App.js
   7. Create 3 columns for product image, info and action

7. Create Node.js Server

   1. run npm init in root folder
   2. update package.json set type: module
   3. Add js. to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move product.js from frontend to backend
   10. create route for api/produckts
   11. return products
   12. run npm start
   13. install nodemon. change in package.json "scripts": {
       "start":"nodemon --watch backend --exec node --experimental-modules backend/server.js "
       },

8. Load Products from backend
   1. edit HomeScreen.js
   2. define products loading and error
   3. create useEffect
   4. define async fetchData and call it
   5. install axios, in package.json 2te zeile einfügen "proxy":"http://127.0.0.1:5000",
   6. get data from api/products
   7. show them in the list
   8. create loading component
   9. create Message Box component
   10. use them in HomeScreen

9. Install ESlint for code linting
   1. install VSCode eslinth extension
   2. npm install -D eslint
   3. run ./node_modules/.bin/eslint --init
      1. Bei der installation die fragen mit enter, enter, react, no, browser node, javascript, plugin enter.
   4. Create ./frontend/.env
   5. Add SKIP_PREFLIGHT_CHECK=true
