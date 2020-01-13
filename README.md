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

Criar e startar containers
```
docker-compose up
```

Acessa container mysql para interação manual
```
docker exec -it mysql-docker mysql -u root -p
```

Executa migration no contanier que esta rodando a Api.
```
docker container exec docker-lab-api adonis migration:run
```