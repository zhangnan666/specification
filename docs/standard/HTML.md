# HTML编码规范
## 书写原则
* 1.分离原则。结构（HTML）、表现（CSS）、行为分离（JavaScript）。
> 将结构与表现、行为分离，保证它们之间的最小耦合，这对前期开发和后期维护都至关重要。
* 语义化原则
> 在基于自身了解的基础上，适当地使用一些语义化元素，会比全篇都是`div+span`标签，只依靠className来区分语义的页面结构更加清晰。常用的HTML5语义化元素如下:

 标签名 | 语义 
-----|-----
header|头部,表示导航或者介绍性的内容
main|页面的主体内容，整个页面只能出现一个main标签
footer|尾部，包含一些作者信息，相关链接，版权信息等
nav|导航栏
aside|表示跟文章主体不那么相关的部分
h1~h6|层级标题
abbr|缩写
strong|强调

::: tip 注意
aside很容易被理解为侧边栏，实际上两者是包含关系。侧边栏属于aside的一种，aside不一定指侧边栏。
:::


## 约定格式
* 编码格式统一采用 UTF-8。
* 所有的HTML标签、HTML属性必须小写。
* 在head中，必须包含title标签以声明标题。
* 对一些比较特殊的模块，务必写上注释，方便其他人理解。
* 每个子元素都需要相对其父级缩进。
* 不推荐inline元素包含block元素。
* 统一使用HTML5的标准文档类型：`<!DOCTYPE html>`
> HTML5文档类型具备前后兼容的特质，并且易记易书写
* 在文档doctype申明之前，不允许加上任何非空字符。
> 任何出现在doctype申明之前的字符都将使得你的HTML文档进入非标准模式
* 在调用CSS和JavaScript时，可以将type属性省略不写,如下：
```html
	<link rel="stylesheet" href="base.css" />
	<script src="base.js"></script>
```
> 这是因为HTML5在引入CSS时，默认type值为text/css；在引入JavaScript时，默认type值为text/javascript
* 所有的标签属性值必须要用双引号包裹，同时也不允许有的用双引号，有的用单引号的情况，如下：
```html 
    <!-- 禁止: -->
	<a href=http://www.readboy.com class=homepage>读书郎教育科技官网</a>

    <!-- 推荐： -->
	<a href="http://www.readboy.com" class="homepage">读书郎教育科技官网</a>
```

* 元素必须正确嵌套,不能交叉，如下：
```html
    <!-- 禁止: -->
	`<span><i>交叉嵌套</span></i>`

    <!-- 推荐： -->
	`<span><i>正确嵌套</i></span>`
```

* 不允许非法的子元素嵌套，如下：
```html
    <!-- 禁止: -->
	<ul>
		<h3>xx列表</h3>
		<li>asdasdsdasd</li>
		<li>asdasdsdasd</li>
	</ul>

    <!-- 推荐： -->
	<div>
		<h3>xx列表</h3>
		<ul>
			<li>asdasdsdasd</li>
			<li>asdasdsdasd</li>
		</ul>
	</div>
```

* 所有标签必须闭合，如下：
```html
    <!-- 禁止: -->
	<div>balabala...
	<link rel="stylesheet" href="*.css">

    <!-- 推荐： -->
	<div>balabala...</div>
	<link rel="stylesheet" href="*.css" />
```
::: tip 说明
虽然有些标记没有要求必须关闭，但是为了避免出错的几率，要求必须全部关闭，省去判断某标记是否需要关闭的时间
:::

* 为`img`元素加上`alt`属性,确保在网络出错的情况下仍然有替代文字来显示图片信息。
* 当HTML内容较多，页面较复杂时，必须按模块添加注释,如：
```html
	<!-- 教学资源模块 -->
	<section class="teaching-resource">
	    ...
    </section>

	<!-- 批改作业模块 -->
	<section class="correct-homework">
	    ...
    </section>
```