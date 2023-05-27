<div align="center" width="100%">
    <h1>MSSQL Docker Guide</h1>
    <p>Some basic commands to use mssql docker container</p>
</div>

🐳 [Docker-Hub](https://hub.docker.com/_/microsoft-mssql-server)


## 📌 MSSQL Edition. 

### Modify docker-compose.yml and add environment variable MSSQL_PID as described below.

MSSQL_PID is the Product ID (PID) or Edition that the container will run with. Acceptable values:

**Developer** : This will run the container using the Developer Edition (this is the default if no MSSQL_PID environment variable is supplied)

**Express** : This will run the container using the Express Edition

**Standard** : This will run the container using the Standard Edition

**Enterprise** : This will run the container using the Enterprise Edition

**EnterpriseCore** : This will run the container using the Enterprise Edition Core

#

## ⏩ Running a sample

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

1. Run the following command to open the mssql client terminal

Enter the password (Passw0rd.) when prompted.

```console
docker exec -it mssql_container /opt/mssql-tools/bin/sqlcmd -S localhost -U sa
```

OR

Enter the password in command itself

```console
docker exec -it mssql_container /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Passw0rd.
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

5. Drop database command

```console
drop database lks;
GO
```

6. To quit the database;
```console
quit
```

## Author

## 👤 RajawatBanna
