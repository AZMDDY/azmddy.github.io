# WSL后台运行程序

> 在WSL终端中运行后台程序时，当所有WSL终端退出时，后台程序会被kill掉。

<!-- more -->

```powershell
powershell.exe -WindowStyle Hidden -c wsl # 后台运行一个wsl终端程序
```

启动一个任务，开机运行上述命令。

![image-20200424201923540](https://raw.githubusercontent.com/AZMDDY/imgs/master/image-20200424201923540.png)