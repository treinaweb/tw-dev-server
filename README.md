# TW Dev Server
[https://treinaweb.com.br](https://treinaweb.com.br)


A powerful and lightweight server to be used for testing, local development and learning.

Use it as static file server and CRUD server.

<img src="./snapshot.png" width="300">


## Installation

> npm i -g @treinaweb/tw-dev-server

This will install tw-dev-server globally so that it may be run from the command line.

## Usage
> tw-dev-server

Now you can visit [http://localhost:3002](http://localhost:3002) to view your server

### Options

| Name        | Description           | Example  |
| ------------- |-------------| -----|
| --port     | port to use (defaults to 3002) | --port=4200 |
| --temp     | data will be erased when stop the server (defaults to false) | --temp=true |


### CRUD Operations


| Method        | URL           | Description  |
| ------------- |-------------| -----|
|  GET    | http://localhost:3002/api/:project-name/:object-name | returns all :object-name from storage |
|  GET    | http://localhost:3002/api/:project-name/:object-name/:id | returns the :object-name with the :id ID |
|  POST    | http://localhost:3002/api/:project-name/:object-name | saves some data on :object-name |
|  PUT     | http://localhost:3002/api/:project-name/:object-name/:id | updates the :object-name with the :id ID |
|  DELETE    | http://localhost:3002/api/:project-name/:object-name/:id | erases the :object-name with the :id ID |
|  DELETE    | http://localhost:3002/api/:project-name/:object-name/all | erases all :object-name from :project-name |
|  DELETE    | http://localhost:3002/api/:project-name/:object-name/all | erases all data from :project-name |

*URL Examples:*

- http://localhost:3002/api/my-school/books/123
- http://localhost:3002/api/my-school/users/
- http://localhost:3002/api/market/products/
- http://localhost:3002/api/v1/market/products/
- http://localhost:3002/api/some-prefix/another-prefix/market/products/12345