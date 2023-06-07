<div align="center" width="100%">
    <h1>ORACLE-XE Docker Guide</h1>
    <p>Some basic commands to use oracle-xe docker container</p>
</div>

🐳 [Docker-Hub](https://hub.docker.com/r/gvenzl/oracle-xe)


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

## ✨ ORACLE-XE Config
#
> Note : In Oracle there are two types of database CDB and PDB. We can create at max 3 database.

&NewLine;
>- database (sid)  - **xe**
>- username - **system**
>- password - **rajawat**
>- port - **1521**
&NewLine;

&NewLine;
>- database (service)  - **xepdb1**
>- username - **rajawat**
>- password - **rajawat**
>- port - **1521**
&NewLine;

### 📌Recommended to use

&NewLine;
>- database (service) - **rajawat**
>- username  - **rajawat**
>- password - **rajawat**
>- port - **1521**
&NewLine;

# 🎓 ORASQL Commands
#

1. Run the following command to open the mssql client terminal

Enter the password (Passw0rd.) when prompted.

```console
docker exec -it oradb sqlplus sys/rajawat as sysdba
```

```console
docker exec -it oradb sqlplus rajawat/rajawat@localhost:1521/rajawat
```

```console
docker exec -it oradb sqlplus rajawat/rajawat@localhost:1521/xepdb1
```

2. Run the following command to list all the tables in the connected database

```console
SELECT table_name FROM user_tables;
```

3. To quit the database;
```console
quit
```


## 🎓 Use Oracle SQL Developer as oracle db client
#
## Author

## 👤 RajawatBanna
