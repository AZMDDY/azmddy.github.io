# 安装 mariadb 数据库

mariadb 是 mysql 数据库的一个开源分支，与 mysql 有高度的兼容性，同时避免了 mysql 的闭源风险。

```shell
 sudo apt-get update
 sudo apt-get upgrade
 sudo apt-get install mariadb-server
 mysqladmin --version # 查看mariadb版本
 sudo mysqladmin -u root password "your_password"; # 设置root用户密码
 sudo mysql -u root -p # root用户登录
 > CREATE USER 'user'@'localhost' IDENTIFIED BY 'password'; # 创建用户
 > DROP USER 'user'@'localhost'; # 删除用户
 > CREATE DATABASE test; # 创建数据库
 > GRANT ALL PRIVILEGES ON test.* to 'user'@'localhost'; # 授予访问test数据库的全部权限
 > FLUSH PRIVILEGES;

```
