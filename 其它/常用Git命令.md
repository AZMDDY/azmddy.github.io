# 常用Git命令

这里介绍的git命令主要是为了解决工作中提交代码遇到的问题。

## Git的基本配置

```shell
# 配置全局的个人信息
git config --global user.name "your_name"
git config --global user.email "your_email"
# 生成密钥对
ssh-keygen -t rsa -C "your_email"
# 后面默认回车
# 在终端会打印出密钥对存放的位置
# 公钥：id_rsa.pub（放到远程仓库，以便使用ssh上传或下载文件）
# 私钥：id_rsa（不可分享）
```

## Git基本命令

```shell
git init # 初始化一个git仓库

git add . # 将工作区的所有未被跟踪的文件添加到暂存区

git add demo.txt # 将demo.txt(已经被修改或新增)提交到暂存区

git commit -m "update" # 将暂存区中内容提交到版本库，并备注

git remote add origin git@github.com:username/demo.git # 添加一个远程仓库

git push -u origin master # 将本地master分支推送到远程master分支，-u 是设置本地分支关联远程分支，以便下次在本分支下，执行git pull/push不需要指定对于的远程分支

git branch -u origin/<branch> <local_branch> # 本地分支与远程分支建立关联

git branch --set-upstream-to=origin/<branch> <local_branch> # 本地分支与远程分支建立关联

git clone git@github.com:username/demo.git # 克隆远程仓库到本地

git push # 推送本地分支到对应的远程分支

git push origin <branch> # 将本地分支推动到[origin]主机的<branch>，如果远程分支不存在则创建

git push --force # 强制推送（谨慎使用），当需要撤回远程提交时，可以先在本地回退，然后强制推送

git pull # 将对应远程分支拉取到本地分支

git pull origin <origin_branch>:<local_branch> # 将指定远程分支拉取Merge到本地分支

git pull origin <local_branch> # 远程对应分支拉取Merge到本地分支

git fetch origin/<branch> # 下载远程分支信息和数据，不会合并

git fetch --all # 下载所有远程分支信息和数据，不会合并

git fetch origin <origin_branch>:<new_local_branch> # 拉取远程分支到新的本地分支

git checkout -b <new_local_branch> origin/<origin_branch> # 拉取远程分支到新的本地分支，并切换到新的本地分支

git merge <other_branch> # 将另一个分支合并到本分支

git log # 显示提交日志

git log --no-merges # 查看所有未被合并过的提交日志

git log -author=user_name # 查询指定作者的提交记录

git stash save "message" # 储藏更改并备注

git stash list # 查看储藏更改

git stash pop

```
