@Rem taskkill /F /IM cmd.exe > nul

if exist error.txt  del error.txt /f /q

call egret build

call egret startserver

pause