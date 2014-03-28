@echo off
title memcached服务端删除脚本

sc stop memcached145

sc delete memcached145
ECHO.
IF %errorlevel% == 1060 GOTO SC_NotExistERROR
IF not %errorlevel% == 0 GOTO SC_DeleteERROR
ECHO ----------------- 服务删除成功! ---------------------------------
ECHO.
GOTO END


:SC_NotExistERROR
ECHO ----------------- 没有找到要删除的服务! ---------------------------------
GOTO END

:SC_DeleteERROR
ECHO ----------------- 服务删除失败! ---------------------------------
GOTO END
 
:END
PAUSE
