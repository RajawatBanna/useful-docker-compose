<div align="center" width="100%">
    <h1>MYSQL Docker Guide</h1>
    <p>Some basic commands to use mysql docker container</p>
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

## ✨ MYSQL Config
#
>- username  - **root**
>- password - **rajawat**
>- port - **3306**


## 🎓 MYSQL Commands
#

1. Run the following command to open the mysql client terminal

Enter the password (Passw0rd.) when prompted.

user - rajawat/root
password - rajawat/rajawat

```console
docker exec -it mysql_container mysql -h localhost -u root -p
```

OR

Enter the password in command itself

user - rajawat/root
password - rajawat/rajawat

```console
docker exec -it mysql_container mysql -h localhost -u root -prajawat
```

2. To See list of database:

```console
show databases;
```

3. Create database command ( Make sure you are logged in with root user)

```console
create database lks;
```

4. Change database context command ( Make sure you are logged in with root user)

```console
use lks;
```

5. Create database command ( Make sure you are logged in with root user)

```console
drop database lks;
```

6. To quit the database;
```console
quit
```

## Author

## 👤 RajawatBanna
