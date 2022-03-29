# WSL 后台运行程序

在 WSL 终端中运行后台程序时，当所有 WSL 终端退出时，后台程序会被 kill 掉。

```powershell
powershell.exe -WindowStyle Hidden -c wsl # 后台运行一个wsl终端程序
```

启动一个任务，开机运行上述命令。

![image-20200424201923540](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/image-20200424201923540.png)
