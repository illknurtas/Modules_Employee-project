# Modules_Employee-project

To install all modules:
``` npm i ```

To create bundles folder type:
``` npm run build ```

To run the program as live first go into webpack.config.js. Scroll down to devServer, that seem like in the below:
```js
devServer: {
    port: 3200,
    index: 'index.html'
}
```

To be able to run the program correctly change that part of the code as 
```js
devServer: {
    port: 3200,
    static:'./'
}
```
After all these steps, to open the project in the live server, run this code in terminal:
```npm run start```

## API Installation

To be able to create an API json folder first install json-server by typing:
````
npm install -g json-server // for windows OS
sudo npm install -g json-server // for Mac OS
```

Then to run the API file run 
```
json-server --watch "path of the API file"
```


