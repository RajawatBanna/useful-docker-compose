<div align="center" width="100%">
    <h1>PGSQL Docker Guide</h1>
    <p>Some basic commands to use pgsql docker container</p>
</div>

🐳 [Docker-Hub](https://hub.docker.com/_/postgres)
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

## ✨ PGSQL Config
#
&NewLine;
>- database (Created Default)- **postgres**
>- username  - **postgres**
>- password - **Passw0rd.**
>- port - **5432**
&NewLine;

&NewLine;
>- database (Created using Docker compose) - **rajawat**
>- username  - **postgres**
>- password - **Passw0rd.**
>- port - **5432**
&NewLine;

## 🎓 PGSQL Commands
#

1. Run the following command to open the pgsql client terminal

```console
docker exec -it pg_container psql -h localhost -U postgres
```

2. To See list of database:

```console
\l
```

3. Create database command

```console
create database lks;
```

4. Change database context command

```console
\c lks
```
4. List all tables in database

```console
\dt
```

5. Drop database command

```console
drop database lks;
```

6. To quit the database;
```console
quit
```

## Author

## 👤 RajawatBanna
