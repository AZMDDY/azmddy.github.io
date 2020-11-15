# 远程连接mariadb数据库

> mariadb是mysql数据库的一个开源分支，与mysql有高度的兼容性，同时避免了mysql的闭源风险。

```shell
# 登录数据库
sudo mysql -u root -p
# 创建数据库
> CREATE DATABASE test;
# 创建远程访问的用户；
> CREATE USER 'user'@'%' IDENTIFIED BY 'password';
# 授予用户权限
> GRANT ALL PRIVILEGES ON test.*  to 'user'@'%';
> FLUSH PRIVILEGES;
# 更改配置文件
vim /etc/mysql/mariadb.conf.d/50-server.cnf
# 注释掉这一行： bind-address            = 127.0.0.1
# 重启mysql
sudo service mysql restart
# 查看3306端口是否开放
netstat -tnlp
```
