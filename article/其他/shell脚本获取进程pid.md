# shell 脚本获取进程 pid

```Bash
#!/bin/bash

# 进程名
process="/sbin/init"

# 获取进程ID
PID=$(ps -ef | grep $process | grep -v grep | awk '{print $2}')

if [ -n "$PID" ]; then
    echo "$process is exist"
    if ps -p $PID >/dev/null; then
        echo "$process is runnig"
    else
        echo " $ process is not running"
    fi
else
    echo "$process is not exist"
fi
```
