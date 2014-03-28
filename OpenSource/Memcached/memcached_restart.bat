@echo off
title memcached服务端删除脚本

sc stop memcached145
sc start memcached145
ECHO.
IF %errorlevel% == 1060 GOTO SC_NotExistERROR
IF not %errorlevel% == 0 GOTO SC_StartERROR
ECHO ----------------- 服务重启成功! ---------------------------------
ECHO.

GOTO END

:SC_NotExistERROR
ECHO ----------------- 没有找到要重启的服务! ---------------------------------
GOTO END

:SC_StartERROR
ECHO ----------------- 服务启动失败! ---------------------------------
GOTO END
 
:END
PAUSE
