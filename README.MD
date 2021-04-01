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
      Bei der installation die fragen mit enter, enter, react, no, browser node, javascript, plugin enter.
   4. Create ./frontend/.env
   5. Add SKIP_PREFLIGHT_CHECK=true

10. Add Redux to HomeScreen

- npm install redux react-redux
- Create Store.js initState={products:[]}
- reducer = (state, action) => switch LOAD_PRODUCTS: {products: sction.payload }
- export default createStore(reducer, initState)
- Edit HomeScreen.js
- shopName = useSelector(state=>state.products)
- const dispatch = useDispatch()
- useEffect(()dispatch({type: LOAD_PRODUCTS, payload:data }))
- Add store to index.js

- Add Redux to ProductScreen
- crfeate product details constant, actions and reducers
- add reducer to store.js
- use action in ProductsScreen.js
- add /.api/products/:id to backend api

14. Handle Add to card button

- Handle add to card in productScreen
- create cartScrfeen.js

15. Implement Add to cart action

- Create AddToCart constants, actions and reducers
- add reducer to store.js
- use action in cartScreen.js
- render cartItem.length

16. Build Cart Screen

- create 2 columns for cart items and cart action
- cartItems.length === 0 ? cart is empty
- show item image, name, qty and price
- Proceed to Checkout button
- Implement remove from cart action

17. Implement remove from cart Aktions

- create rempveFromCart constants, actions and reducers
- add reducer to store.js
- use action in CartScreen.js

18. Connect to MongoDB

- npm install mongoose
- in Terminal, brew tap mongodb/brew
- brew install mongodb-community@4.4
- brew services start mongodb-community@4.4, brew services stop mongodb-community@4.4
- connect to mongoDB
- create config.js
- npm install dotenv
- export MoONGODB_URL
- create models/userModel.js
- create userSchema and userModel
- create models/productModel.js
- create productSchema and productModel
- create userRoute
- seed sample data

19. Create sample products in mongoDB

- create models/productModels.js
- create productSchema and productModel
- create productRoute
- seed sample data

20. Create Sign-in Backend

- create /signin api
- check email and password
- generate token
- install json web token
- install dotenv
- return token and data
- test it using postman

21 Design SignIn Screen

1.  create SigninScreen
1.  render email and password fields
1.  create signin constants, actions and reducers
1.  Update Header based on user login

22 Implement SignIn Action

1.  create signin constants, actions and reducers
2.  add reducer to store.js
3.  use action in SigninScreen.js

23 Create Register Screen

    1. create API for /api/users/register
    2. insert new user to database
    3. return user info and token
    4. create RegisterScreen
    5. Add fields
    6. Style fields
    7. Add screen to App.js
    8. create register action and reducer
    9. check validation and create user

24 Create Shipping Screen

    1. create CheckoutSteps.js component
    2. create shipping fields
    3. implement shipping constant, actions and reducers

25 Create Payment Screen

    1. create payment fields
    2. implement shipping constant, actions and reducers

26 Design Place Order Screen

    1. design order summary fields
    2. design order action

video 26 min 11.45
