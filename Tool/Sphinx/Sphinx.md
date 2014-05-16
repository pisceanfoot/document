Sphinx
===============================

尝试过 `Markdown` 的简单易用，现在来看看 [Sphinx](http://sphinx-doc.org/)。 Sphinx是个非常简单易用的生成文档的工具，最初Sphinx是用来生成 `Python` 文档的。 Shpinx 支持模板，通过配置模板可以生成不同的样式甚至是微软 DOCX 文档。

reStructuredText
----------------------
Sphinx使用[reStructuredText](http://docutils.sf.net/rst.html) 作为标记语言。reStructuredText看山去 Markdown 类似，所以熟悉Markdown的同学很快会上手。

详细语法请见 [User Documentation](http://docutils.sourceforge.net/rst.html#user-documentation) 

Sphinx安装
---------------------
easy_install 安装
```
easy_install -U Sphinx
```


Sphinx使用
---------------------
```
按照提示生成 sphinx 目录结构
$ sphinx-quickstart

-source
--|_static
--|_templates
--|conf.py
--|index.txt
-make.bat
-Makefile
```

在使用 qucistart 时有几个重要的选项。
1. 后缀名称，默认是 rst。支持 rst和 txt
2. 

```
编译生成 html
$ sphinx-build -b html sourcedir builddir
```




Sphinx常用语法
---------------------
```
.. 注释

```

```
目录结构
.. toctree::
	:maxdepth:2

	index
	www/index
```



示例
---------------------
```
index:

.. AppRestfulService documentation master file, created by
   sphinx-quickstart on Mon Mar 31 17:25:12 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Service Interface
=============================================

目录:

.. toctree::
   :maxdepth: 3

   www/index

..   ssl/index

..   service/index


测试环境
==================
* GDEV
* GQC

Indices and tables
==================

* :ref:`genindex`
* :ref:`search`
```

```
www/index
.. AppRestfulService documentation master file, created by
   sphinx-quickstart on Mon Mar 31 17:25:12 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

WWW 部分
=============================================

目录:

.. toctree::
   :maxdepth: 2

   HomePage
   
..   Category
..   Search
..   Product
..   Game
```

```
HomePage

.. AppRestfulService documentation master file, created by
   sphinx-quickstart on Mon Mar 31 17:25:12 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

HomePage
=============================================
.. toctree::
	:maxdepth: 1

	HomePage/Getx
	HomePage/HomeV1
```

```
Home?GetX

GetX.json
=============================================

URL
-------------------------
{host}/GetX.json

描述
-------------------------
获取自定义启动广告信息
PageID=0; PageType=0；Position=300

HTTP Request Method
-------------------------
GET

参数类型
-------------------------
无

参数
-------------------------
无

返回类型
-------------------------
JSON

返回内容
-------------------------

JSON
::

    {
    	UIInfo:{

    	},
    	UIOtherInfo:{

    	}
    }
```