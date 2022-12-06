# JSON-Server Fake API

This project is to help faking API during development. this project is based on [json-server](https://github.com/typicode/json-server)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run mock
```

### example files 
```sh
/module/example
```

### template 
```sh
{
  url: "/example/error-response",
  body: [],
  method: "GET",
  statusCode: 403,
  response: {
    status: false,
    message: "You're not authorized !",
  },
}
```
