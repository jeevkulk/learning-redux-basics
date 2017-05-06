Learning Redux Basics:

Steps to download and execute:
1. Install node.js is installed
2. Download this from https://github.com/jeevkulk/learnng-redux-basics
3. Run `npm install` from command prompt
4. Run `npm start`
5. Then open localhost:8080 in a browser and view the console to check how it works 

Note: To try out different topics comment / uncomment imports from index.js.

This is an independent module and following is covered:
1. single_reducer.js:
    + State is mutable object
    + State is maintained using single reducer and published using redux store
2. multiple_reducer.js:
    + State is immutable object
    + State is maintained using multiple reducers and published using redux store
3. redux_middleware.js:
    + Redux middleware gets called between Action and Reducers, so the flow diagram can be depicted as:
        App View --(dispatches)--> Action ----> Middleware ----> Reducers ----> Store ----> Subscribed App View
        