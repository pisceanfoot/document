@echo off
title memcached����˰�װ�ű�

set runDir=%~dp0
set fileCmd=memcached145.exe -d runservice -m 1024
set "binpathParam=%runDir%%fileCmd%

sc create memcached145 binpath= "%binpathParam%" displayname= "memcached server" start= auto
ECHO.
IF not %errorlevel% == 0 GOTO SC_CreateERROR
ECHO ----------------- ���񴴽��ɹ�! ---------------------------------
ECHO.

sc start memcached145
IF not %errorlevel% == 0 GOTO SC_StartERROR
ECHO ----------------- ���������ɹ�! ---------------------------------

GOTO END

:SC_CreateERROR
ECHO ----------------- ��������ʧ��! ---------------------------------
GOTO END

:SC_StartERROR
ECHO ----------------- ��������ʧ��! ---------------------------------
GOTO END
 
:END
PAUSE

