<div align="center" width="100%">
    <h1>ORACLE-XE Docker Guide</h1>
    <p>Some basic commands to use oracle-xe docker container</p>
</div>

🐳 [Docker-Hub](https://hub.docker.com/r/gvenzl/oracle-xe)

## ✨Prerequisites
#

- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS:
    [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then
    [Docker Compose](https://github.com/docker/compose)
- Download some or all of the samples from this repository.
#

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

## ✨ ORACLE-XE Config
#
> Note : In Oracle there are two types of database CDB and PDB. We can create at max 3 database.

&NewLine;
>- database  - **xe**
>- username - **system**
>- password - **rajawat**
>- port - **1521**
&NewLine;

&NewLine;
>- database  - **xepdb1**
>- username - **rajawat**
>- password - **rajawat**
>- port - **1521**
&NewLine;

### Recommended to use - rajawat db [ which is created in docker compose]

&NewLine;
>- username - **rajawat**
>- username  - **rajawat**
>- password - **rajawat**
>- port - **1521**
&NewLine;


## 🎓 Use Oracle SQL Developer as oracle db client
#
## Author

## 👤 RajawatBanna
