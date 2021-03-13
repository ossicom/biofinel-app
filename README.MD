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
   13. install nodemon/ in package.json change "scripts": {
       "start":"nodemon --watch backend --exec node --experimental-modules backend/server.js "
       },
