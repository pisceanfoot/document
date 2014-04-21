Chrome Extension 开发
======================
Chrome extension 即 Chrome 扩展插件插件。 Chrome 插件非常丰富，不局限于添加 script/html，还可以实现远程登录，代理等非常复杂的功能。
下来介绍几个常用的 Chrome 插件看看 Chrome 插件可以实现怎样的功能，然后介绍下如何插件开发。

常用插件
-----------------------
1. [Proxy Switchy](https://chrome.google.com/webstore/detail/caehdcpeofiiigpdhbabniblemipncjj)
	快速切换系统代理，并能更具规则自动切换。
	![Proxy Switchy](images/proxy_switchy.png)
2. [e 淘 插件（如意淘）](https://chrome.google.com/webstore/detail/%E5%A6%82%E6%84%8F%E6%B7%98%EF%BC%9A%E5%90%8C%E6%AC%BE%E6%AF%94%E4%BB%B7%EF%BC%8C%E4%BB%B7%E6%A0%BC%E6%9B%B2%E7%BA%BF%EF%BC%8C%E9%99%8D%E4%BB%B7%E6%8F%90%E9%86%92/keigpnkjljkelclbjbekcfnaomfodamj)
	多网站比较，商品历史价格
	![如意淘](images/etao.png)
3. [Chrome RDP](https://chrome.google.com/webstore/detail/chrome-rdp/cbkkbcmdlboombapidmoeolnmdacpkch)
	用 Chrome 远程登录服务器
	![Chrome RDP](images/chrome_rdp.png)


Extension 概况
-----------------------
先看一个官方示例，示例是一个很简单的功能，点击右上角的图片下拉浏览 flickr 的图片。
![官方示例](images/gettingstarted-1.jpg)

这个插件涉及到两个功能，`browser action` 和 `popup`。

- Browser Action
	显示 icon
	![brower action](images/gettingstarted-icon.png)
- Popup
	对应 popup.html
	![popup](images/gettingstarted-popup.jpg)

这样一个插件开发首先需要定义一个清单即 manifest.json 文件，告诉 Chrome 需要加载那些文件，需要的功能和对应的权限。
```
{
  "manifest_version": 2,

  "name": "One-click Kittens",
  "description": "This extension demonstrates a browser action with kittens.",
  "version": "1.0",

  "permissions": [
    "https://secure.flickr.com/"
  ],
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  }
}
```

## Chrome 插件结构
Chrome 插件结构主要分为5个部分
- Browser Action
- Page Action
- Background
- Content Script
- Popup

### Browser Action

### Page Action
### Background
### Content Script
### Popup


开发
-----------------------
### Chrome 目录结构
|- manifest.json
|- js/ (option)
|- css/ (option)
|- images/ (option)

*除了 manifest.json 文件外其他都是自定的*


调试
-----------------------



示例 - 词霸
-----------------------


参考资料
-----------------------