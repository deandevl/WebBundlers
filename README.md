# WebBundlers
Provides sample script in using web bundlers such as webpack and parcel for learning and referral purposes. The purpose is to show how these bundlers put together a ES6 module library that exports functions and styles.

The are two main folders named `parce` and `webpack` with subfolders named `simple-library`.

Under `parcel\simple-library` an additional sub-folder named `test` checks if the `add.js` function is bundled and imported correctly.  We have `add.js` bundled in the module file `moduleadd.js` that exports the function. The file `app.js` imports the function from `moduleadd.js` and is hosted as a script in `index.html`.

To run the test, set the current directory to the `test` folder and enter:

```
http-server
```

From a browser enter the address `localhost:8080` and the imported bundle will be executed.

Under `webpack\simple-library`illustrates another example of bundled module importing of functions, css, and an image resource. See the article  [A Beginner’s Guide to Webpack](https://www.sitepoint.com/webpack-beginner-guide/) for how this example was constructed.
