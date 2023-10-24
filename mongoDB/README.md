<div align="center" width="100%">
    <h1>MongoDB Docker Guide</h1>
    <p>Some basic commands to use MongoDB docker container</p>
</div>

## ✨Prerequisites

- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS:
    [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then
    [Docker Compose](https://github.com/docker/compose)
- Download some or all of the samples from this repository.

### Running a sample

```console
docker-compose up
```

To stop and remove all containers of the sample application run:

```console
docker-compose down
```

To stop and remove all containers with Volume of the sample application run:

```console
docker-compose down -v
```

## ✨ MongoDB Config
#
>- username  - **root**
>- password - **example**
>- port - **27017**

## ✨ Mongo-Express Client

Excess the web based mongodb Client on port 8081 to create,view, update and delete the database


## 🎓 MongoDB Commands
#

1. Run the following command to open the mssql client terminal and enter the password (Passw0rd.) when prompted.

```console
docker exec -it mongo_db mongosh --username root --password example
```

2. To See list of database:

```console
show dbs;
```

3. Create database command

```console
use lks;
```

4. Change database context command

```console
use lks;
```

5. Create database command

```console
drop database lks;
```



## Author

## 👤 RajawatBanna
