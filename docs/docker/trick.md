### when use volumn but still be missing dependence by update package.json

```shell
docker compose down
docker compose up
```

### Remove volumn except

```shell
docker volume ls --format "table {{.Driver}}\t{{.Name}}\t{{.Mountpoint}}"
docker volume ls -q | grep -v -e "pg_admin" -e "pg_data" | xargs docker volume rm
```