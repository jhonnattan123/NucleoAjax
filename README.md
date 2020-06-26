# NucleoAjax
Ajax coated with a function to customize your settings through an object.
It also includes a predefined error response to any eventuality.
Another advantage is that it makes calling with async await easier

The real objective of this script is to facilitate communication between backend and frontent using the object known as modulle-connector which can be found in this repository:
https://github.com/jhonnattan123/module-connector also available in NPM

## Simple asynchronous GET example

first include script in u HTML file

```html
<script async defer src="public/scripts/NucleoAjax.js" type="text/javascript">
</script>
```

inside an asynchronous function add your GET request

```javascript

// define backend url
var urlClientsAPI = "mybackend/clients";

// ejecute petition
var arrayClients = await NucleoAjax({
    url: urlClientsAPI
});

// backend response
console.log( arrayClients )

```

If your backend generates an error and does not have a response or if the server cannot be connected, NucleoAjax will send the following object

```javascript
// when fail NucleoAjax send this object
{
    success : false,
    message : "call_error",
    code : 404,
    response : []
}
```

this answer is compatible with the module-connector object
https://github.com/jhonnattan123/module-connector

## Simple asynchronous POST example


this time a new client is generated and sent to the backend

```javascript

var urlClientsAPI = "mybackend/clients";

var newClient = {
    strName: "Jhonnattan",
    strAge: 25
};

// ejecute petition
var proccessCreateClient = await NucleoAjax({
    url: urlClientsAPI,
    type: 'POST',
    contentType : "application/json",
    data: JSON.stringify( newClient )
});

// backend response
console.log( proccessCreateClient )

```
in the case of update and delete, it is only the same as the previous example except that the method is changed
