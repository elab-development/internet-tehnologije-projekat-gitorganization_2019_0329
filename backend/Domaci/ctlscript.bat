@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\Users\LC230919\Desktop\Laravel-maj\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\server\hsql-sample-database\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\ingres\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\ingres\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\mysql\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\mysql\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\postgresql\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\apache\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\apache\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\openoffice\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\apache-tomcat\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\apache-tomcat\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\resin\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\resin\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\jetty\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\jetty\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\subversion\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist C:\Users\LC230919\Desktop\Laravel-maj\lucene\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\lucene\scripts\ctl.bat START)
if exist C:\Users\LC230919\Desktop\Laravel-maj\third_application\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\Users\LC230919\Desktop\Laravel-maj\third_application\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\third_application\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\lucene\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\Users\LC230919\Desktop\Laravel-maj\subversion\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\subversion\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\jetty\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\jetty\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\resin\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\resin\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT C:\Users\LC230919\Desktop\Laravel-maj\apache-tomcat\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\openoffice\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\apache\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\apache\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\ingres\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\ingres\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\mysql\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\mysql\scripts\ctl.bat STOP)
if exist C:\Users\LC230919\Desktop\Laravel-maj\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\LC230919\Desktop\Laravel-maj\postgresql\scripts\ctl.bat STOP)

:end

