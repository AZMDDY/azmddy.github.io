# Ubuntu20.04 刷新DNS缓存

```bash
# 刷新缓存
sudo systemd-resolve --flush-caches

# 查看缓存
sudo systemd-resolve --statistics
```

如果遇到网页打不开，可以尝试断开网络，进行重连。