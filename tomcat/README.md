<div align="center" width="100%">
    <h1>Tomcat Webserver</h1>
    <p>Web application server</p>
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

## ✨ MSSQL Config
#
>- username  - **sa**
>- password - **Passw0rd.**
>- port - **1433**


## 🎓 MSSQL Commands
#

1. Run the following command to open the mssql client terminal and enter the password (Passw0rd.) when prompted.

```console
docker exec -it mssql_container /opt/mssql-tools/bin/sqlcmd -S localhost -U sa
```

2. To See list of database:

```console
select name from sys.databases;
GO
```

3. Create database command

```console
create database lks;
GO
```

4. Change database context command

```console
use lks;
GO
```

5. Create database command

```console
drop database lks;
GO
```



## Author

## 👤 RajawatBanna
