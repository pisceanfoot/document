@echo off
title memcached�����ɾ���ű�

sc stop memcached145
sc start memcached145
ECHO.
IF %errorlevel% == 1060 GOTO SC_NotExistERROR
IF not %errorlevel% == 0 GOTO SC_StartERROR
ECHO ----------------- ���������ɹ�! ---------------------------------
ECHO.

GOTO END

:SC_NotExistERROR
ECHO ----------------- û���ҵ�Ҫ�����ķ���! ---------------------------------
GOTO END

:SC_StartERROR
ECHO ----------------- ��������ʧ��! ---------------------------------
GOTO END
 
:END
PAUSE
