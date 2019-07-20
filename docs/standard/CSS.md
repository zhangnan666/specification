# CSS编码规范
## 代码格式
* 用class选择器来代替id选择器。
* 如果属性值为0，则不需要为0加单位,如：`padding-left: 0;`
* 0~1的小数，前面的0可以省略不写,如：`transition: transform .5s;`
* 用16进制表示颜色时，字母均采用小写，如：`background-color:#13b5b1;`
* 每条规则结束后都必须加上分号。
* 背景图引用资源时资源名不需要加引号，如：`background-image: url(../a.png);`
* 当使用LESS或SCSS时，注释可使用 //... 来代替 /\*...\*/ ，因为//注释符不会出现在LESS或SCSS文件在打包后的CSS文件中。
* 组件内书写style样式表必须添加**scoped**属性限制命名空间，防止类名污染到全局。
* 伪类前缀使用一个冒号`:`，而伪元素前缀必须采用两个冒号`::`，如`.author::before`。这是为了将伪元素与伪类严格区分开来，避免混淆。
::: tip 说明
在CSS3中，新增的伪元素前缀必须采用两个冒号以便和伪类区分开来，但由于历史原因，CSS1和CSS2已存在的伪元素没有做区别，造成单冒号、双冒号混用滥用的乱象。为了规范化书写，伪元素前缀为双冒号，伪类前缀为单冒号。
:::
* 当属性不需要继承时，使用简写将使得代码更加简洁，如：
```less
/* bad */
.author {
    border-width: 2px;
    border-style: solid;
    border-color: #ff0000;
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    font-family: "Microsoft YaHei";
}
/* good */
.author {
    border: 2px solid #ff0000;
    font: bold 20px/30px "Microsoft YaHei";
}
```

* 当属性需要继承时，不要使用简写，如：
```less
/* bad */
.article {
　　　font: bold 20px "Microsoft YaHei";
}
.article .author {
　　　font: 14px "Microsoft YaHei";
}
/* good */
.article {
　　　font: bold 20px "Microsoft YaHei";
}
.article .author {
　　　font-size: 14px;
}
```
::: warning 警告
 在上述例子中，如果需要font-weight继承下去，子级采用简写是无效的，这是因为采用简写时，复合属性里的其他属性将会被重置为 user agent 的默认值，而不是继承父级的值。
:::

* 属性书写顺序，推荐使用依次书写**布局**（`position/left/top/display/float/z-index`），**自身**（`width/height/margin/padding/border/outline/background`），**字体**（`color/font/text-align/line-height`），**其他**（`transform/transition/user-select/cursor`）
::: tip 注意
CSS的书写顺序对于浏览器渲染的性能并无影响，这样做是为了按模块区分CSS代码，尤其是当CSS代码较多时，可以快速定位并修改
:::


## 命名规则
* class命名应尽量语义化，如 **.user-info** ,不应使用拼音命名法(约定俗成的除外，如：baidu)。
* class名称只出现小写字符和破折号"-"，因存在同一个页面混用下划线、驼峰命名法、破折号等乱象，所以我们只选一种目前业内普遍使用的方式。
* 避免过度简写，如 **.btn** 代表 **.button**,但是 **.b** 不具备任何语义。
* 尽量根据内容或功能来命名，而不是根据表现形式去命名，常见的根据表现形式命名的有：**.left**,**.top**,**.big**,**.red**等。
* 推荐的常用class命名参考表如下：

 语义 | 命名 
-----|-----
容器|wrapper/container
页头|head/header
页脚|foot/footer
页面主体|main
侧栏|sidebar
首页|homepage
菜单|menu
二级菜单|submenu
导航|nav
二级导航|subnav
选项卡|tab
列表|list
信息介绍|info
提示信息|tips
通知信息|message/msg
搜索输入框|search-input
箭头|arrow
登录|login
标题|title/headline
按钮|button/btn
广告位|banner
标志|logo
版权|copyright
活动状态|is-active
禁用状态|is-disabled

## 性能优化
* 当使用LESS或SCSS时，嵌套层级尽量不要超过3层，因为过深的选择器层级不仅拖慢了查找性能，也带来了代码维护成本的增加。
* 当出现一组大小相近，数目较多的icon图像时，建议处理成雪碧图来减少http请求数。当制作帧动画时，必须处理成雪碧图。
* 能用CSS可以做到的视觉效果，就不要使用JS去做。尽量用CSS控制交互或视觉的变化，JS只需要更改className来切换效果。
* 当使用animation做动画时，应尽可能使用transform属性，而不是直接修改DOM的位置、大小、宽高等属性，因为后者的性能开销要远大于前者。

```less
/* bad */
@keyframes move {
    from{left: 0}
    to{left: 100px}
}
/* good */
@keyframes move {
    from{transform: translateX(0)}
    to{transform: translateX(100px)}
}
```