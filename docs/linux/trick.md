### Alias command

```shell
vim ~/.zshrc
alias k="kubectl"
```

# add limit file watch

```shell
sudo sysctl fs.inotify.max_user_watches=524288
```

# Copy file from local to host

```shell
scp -r /path/to/source/* user@vps_ip:/path/to/destination/
```

# check dung lượng thư mục overview
```shell
 du -h --max-depth=1
```