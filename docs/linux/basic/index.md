### Kill port 

```shell
kill $(lsof -t -i :PORT_NUMBER)
```

### Check IP:

```shell
ip addr show
```

# Check OS
```shell
uname
lscpu
free
```
check cpu core
```shell
nproc --all
```

Check all service:
```shell
systemctl list-units --type=service
```

