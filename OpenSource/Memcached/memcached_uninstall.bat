@echo off
title memcached�����ɾ���ű�

sc stop memcached145

sc delete memcached145
ECHO.
IF %errorlevel% == 1060 GOTO SC_NotExistERROR
IF not %errorlevel% == 0 GOTO SC_DeleteERROR
ECHO ----------------- ����ɾ���ɹ�! ---------------------------------
ECHO.
GOTO END


:SC_NotExistERROR
ECHO ----------------- û���ҵ�Ҫɾ���ķ���! ---------------------------------
GOTO END

:SC_DeleteERROR
ECHO ----------------- ����ɾ��ʧ��! ---------------------------------
GOTO END
 
:END
PAUSE
