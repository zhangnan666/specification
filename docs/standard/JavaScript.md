# JavaScript编码规范
## 注释
* 注释应合理使用，不推荐每个方法每条语句都写上注释，也不推荐一个js模块全篇没有一个注释。
::: danger 警告
当遇到以下情况时，必须写上注释：1.难以理解的代码段；2.与业务逻辑相关性很强的代码段；3.可能存在错误，健壮性不佳的代码段。
:::
* 注释前应空行，但当注释在代码块的第一行时，则无需空行。
* 单行注释`//`后面加一个空格。

## 引号
* 字符串统一使用单引号包裹，如遇到引号嵌套的情况，最外层使用单引号，内层使用双引号。
```js
// bad
let x = "test";

// good
let y = 'foo',
    z = '<div id="test"></div>';
```

## 变量
### 变量命名
* 标准变量采用驼峰式命名（除了对象的属性外）。
* 'ID'在变量名中全大写。
* 'URL'在变量名中全大写。
* 'Android'在变量名中大写第一个字母。
* 'iOS'在变量名中小写第一个，大写后两个字母。
* 常量全大写，用下划线连接。
* 构造函数，大写第一个字母。
``` js
// 示例
let thisIsMyName;

let goodID;

let reportURL;

let AndroidVersion;

let iOSVersion;

const MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}

```

### 变量使用
* 变量必须先声明后使用。
* 声明过的变量必须使用。
* 如果一个变量声明后从未被重新定义，就应该用const声明。
* 永远不要直接使用undefined进行变量判断，而应该使用typeof和字符串'undefined'对变量进行判断。
```js
// bad
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
```

## 数组、对象、函数
* 立即执行函数外层必须包一层括号。
* 不要在内置对象的原型上添加方法，如Array, Date。
```js
// bad
Array.prototype.count = function(value) {
    return 4;
};
```

* for-in里一定要有hasOwnProperty的判断。
```js
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        // be sure that obj[key] belongs to the object and was not inherited
        console.log(obj[key]);
    }
}
```

* 在使用构造函数进行实例化的时候，必须把抛出的新对象内存指针赋值给一个变量。
```js
// bad
new Person();

// good
let person = new Person();
```

* switch语句要给出default情况的处理逻辑。


## 其他
* 统一使用ES6/ES7编写。
* js文件名应该全部使用小写字符, 连字符统一使用`-`或`.`，如aa-bbb-name.js,api.config.js。
* 不允许有空的代码块。
```js
// bad with empty block
if (condition) {

}
```

* 用`===`, `!==`代替`==`, `!=`。
* 字符串拼接推荐使用模板字符串。
```js
let age = 12,
    name = 'xiaoming';
let into;

// bad
intro = 'my name is '+ name +',I am ' + age + ' years old';

// good 
intro = `my name is ${name},I am ${age} years old`
```

* 类的定义和扩展使用class和extends关键字，而不是修改函数原型。
* 对于需要使用匿名函数的场景优先考虑箭头函数。
