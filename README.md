# project N8-QUIZ
This is a project developed for Backend quiz on the company, Number 8.
## Requirements
- [Docker](https://docs.docker.com)
- [Docker compose](https://docs.docker.com/compose/install/)
## Environments variables
You must set values on the file **.env**
- API_PORT: Port of the API.
- DB_PORT: Port of the database.
Observations: In this project has anothers variables, but they was set with default values (For demo reasons).
## Variables was set
- DB_HOST=postgres -> it is a value on the docker network.
- DB_USERNAME=test -> user will execute the migrations.
- DB_PASSWORD=test -> password of the user
- DB_DATABASE=test -> database will be created by migrations.
## Create API environments
1. Go to the root of the project
2. Execute the next command:
```sh
docker-compose up
``` 
3. Go to the browser web and write the documentation link: **localhost:${API_PORT}/documentation**
4. Have fun!
## Postscript
* In this project was developed with postgreSQL, so all the data will save on the volume of your container (You could access with the connection: **postgres://test:test@localhost:${DB_PORT}/test**).
* The documentation of the api was developed with Swagger (This package create a frontend where you can test the api endpoints).