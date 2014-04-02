Tomcat
==============================

服务安装脚本
-------------------------

（tomcat7 //IS//Tomcat7）[http://tomcat.apache.org/tomcat-7.0-doc/windows-service-howto.html#Installing_services]

[tomcat_install_service.bat](tomcat_install_service.bat.txt)

重要配置
--------------------------
maxKeepAliveRequests

*The maximum number of HTTP requests which can be pipelined until the connection is closed by the server. Setting this attribute to 1 will disable HTTP/1.0 keep-alive, as well as HTTP/1.1 keep-alive and pipelining. Setting this to -1 will allow an unlimited amount of pipelined or keep-alive HTTP requests. If not specified, this attribute is set to 100.*

[maxKeepAliveRequests](http://tomcat.apache.org/tomcat-5.5-doc/config/http.html)