# Docker Lab AdonisJs, Mysql

## Ajustes necessarios para projeto adonis rodar em container docker

Arquivo .env
```
# HOST=127.0.0.1
HOST=0.0.0.0
```
```
#DB_HOST=127.0.0.1
DB_HOST=mysql-docker #informar como host o nome dado ao container mysql docker
```

## Comandos uteis docker e docker-compose

```
docker-compose up
```
```
docker exec -it mysql-docker mysql -u root -p
```
```
docker container exec docker-lab-api adonis migration:run
```