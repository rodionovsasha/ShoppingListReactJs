[![Build Status](https://travis-ci.org/rodionovsasha/ShoppingListReactJs.svg?branch=master)](https://travis-ci.org/rodionovsasha/ShoppingListReactJs)

# ShoppingList ReactJs

### Build the application
<pre>
mvn clean install
</pre>
or using wrapper
<pre>
./mvnw clean install
</pre>

Build only backend:
<pre>
mvn --projects shoppinglist-backend clean install
</pre>

### Run backend
<pre>
mvn --projects shoppinglist-backend spring-boot:run
</pre>
or simply run the application in your IDE using public static void main method.

Open the following URL in browser:
<pre>
http://localhost:8090/api/v1/
</pre>
Port and context path can be configured in `application.yml` properties.
`8090` is a default port and can be overridden in a command line as well:
```
mvn spring-boot:run -Dport=9090
```

### Swagger
http://localhost:8090/api/v1/swagger-ui.html

### Rest JSON API URL
```
http://localhost:8090/api/v1/
```

### Run frontend
``` bash
# go to frontend module
cd shoppinglist-frontend

# serve with hot reload at http://localhost:3000
npm start
```
Note that the development build is not optimized.
To create a production build, use
```
npm run build
```
