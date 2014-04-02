用 Markdown 来写文档&博客
============================

Markdown 的目的易读易用，把主要的精力集中在文字内容上而不是文字的**排版**。

工具
----------------------
- Widows: [MarkdownPad2](http://markdownpad.com/)
- Sublime (插件): [MarkdownPreview](https://github.com/revolunet/sublimetext-markdown-preview#installation-)


示例
----------------------
我们来看几个示例

### 示例1
```
大标题
================
对应 HTML:
<h1>大标题</h1>

中标题
---------------
对应 HTML:
<h2>中标题</h2>
```

当然还有其他的表示方法 Atx 形式
```
#大标题
##中标题
###小标题
```

Atx 形式支持在首行插入 1 - 6 个 `#`，对应 `H1` 到 `H6`

###示例2 Blockquotes

> 这是一个区块 Blockquotes1
> 这是一个区块 Blockquotes2
> > ###这是一个子区块 Sub Blockquotes
> > 这是一个子区块 Sub Blockquotes

效果示例：
```
> 这是一个区块 Blockquotes1
> 这是一个区块 Blockquotes2
> > ###这是一个子区块 Sub Blockquotes
> > 这是一个子区块 Sub Blockquotes

对应 HTML:
<blockquote>
<p>这是一个区块 Blockquotes1<br>这是一个区块 Blockquotes2</p>
	<blockquote>
	<h3 id="-sub-blockquotes">这是一个子区块 Sub Blockquotes</h3>
	<p>这是一个子区块 Sub Blockquotes</p>
	</blockquote>
</blockquote>
```

###示例3 项目符
项目符分为两种，有序和无序

有序项目符：

1. A
2. B
3. C

```
1. A
2. B
3. C

对应 HTML:
<ol>
<li>A</li>
<li>B</li>
<li>C</li>
</ol>

```

无序项目符：
- A
- B
- C

```
下面这三中表示效果是一致的：
- A			+ A			* A
- B			+ B			* B
- C			+ B			* B

对应 HTML
<ul>
<li>A</li>
<li>B</li>
<li>C</li>
</ul>
```
当前还可以这样，只需要保持缩进格式：
```
1. 有序标题1
	嵌套内容

2. 有序标题2
	嵌套内容

<ol>
<li><p>有序标题1<br> 嵌套内容</p>
</li>
<li><p>有序标题2<br> 嵌套内容</p>
</li>
</ol>
```
###示例4 分割线
连续三个或以上的星号、减号、下划线
```
***********

-----------

___________

对应 HTML
<hr>
<hr>
<hr>
```

###示例5 链接和图片
This is [an example](http://example.com/ "Title") inline link.

```
1. 链接
This is [an example](http://example.com/ "Title") inline link.

2. 图片
![Alt text](/path/to/img.jpg)
```

###示例6 Code
``````
`code`

``code ``

```
code block
```
``````

试试上面的效果吧~

更多请参考
-------------------
[markdown-syntax-zhtw](https://github.com/othree/markdown-syntax-zhtw/blob/master/syntax.md)
[wowubuntu.com](http://wowubuntu.com/markdown/)