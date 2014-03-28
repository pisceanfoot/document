@echo off
title memcached服务端安装脚本

set runDir=%~dp0
set fileCmd=memcached145.exe -d runservice -m 1024
set "binpathParam=%runDir%%fileCmd%

sc create memcached145 binpath= "%binpathParam%" displayname= "memcached server" start= auto
ECHO.
IF not %errorlevel% == 0 GOTO SC_CreateERROR
ECHO ----------------- 服务创建成功! ---------------------------------
ECHO.

sc start memcached145
IF not %errorlevel% == 0 GOTO SC_StartERROR
ECHO ----------------- 服务启动成功! ---------------------------------

GOTO END

:SC_CreateERROR
ECHO ----------------- 创建服务失败! ---------------------------------
GOTO END

:SC_StartERROR
ECHO ----------------- 服务启动失败! ---------------------------------
GOTO END
 
:END
PAUSE

