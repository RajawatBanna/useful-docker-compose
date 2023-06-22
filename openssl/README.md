<div align="center" width="100%">
    <h1>OpenSSL</h1>
    <p>Openssl</p>
</div>


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

## 🎓 Openssl Commands
#

1. Run the below command to create your own customized wildcard certificate.

```console
docker run -it -v $(pwd):/export --name openssl -it --entrypoint /bin/ash frapsoft/openssl
```

### OR

You can create your own rootCA key and certificate from the below command and use those instead of the given

1. Create a Self Signed Root certificate

```console
openssl req -x509 -sha256 -days 1825 -newkey rsa:2048 -keyout rootCA.key -out rootCA.crt
```

2. Run the below command to create your own customized wildcard certificate.

```console
docker run -it -v $(pwd):/export --name openssl -it --entrypoint /bin/ash frapsoft/openssl
GO


## Author

## 👤 RajawatBanna
