# Raspbian Buster Lite安装桌面

在Raspbian Buster Lite上安装PIXEL桌面。

安装以下软件包，重启，通过win10的远程桌面连接，可以连接树莓派的桌面。

```shell
sudo apt-get install -y python-sense-emu-doc realvnc-vnc-viewer
sudo apt-get install --no-install-recommends xinit
sudo apt-get install raspberrypi-ui-mods
sudo apt-get install --no-install-recommends raspberrypi-ui-mods lxsession
sudo apt-get install lxde-core lxappearance
sudo apt-get install lightdm
```