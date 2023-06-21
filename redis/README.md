<div align="center" width="100%">
    <h1>Redis Docker Guide</h1>
    <p>Some basic commands to use redis docker container</p>
</div>

## Redis server 🐳 [Docker-Hub](https://hub.docker.com/_/redis)
## Redis insight 🐳 [Docker-Hub](https://hub.docker.com/r/redislabs/redisinsight)


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

## ✨ Redis Config
#

```console
Make sure to modify the below hostname in the envrionment variable in docker insight
RITRUSTEDORIGINS: https://redisinsight.rajawat.com,http://localhost,http://172.27.0.1
```

## Author

## 👤 RajawatBanna
