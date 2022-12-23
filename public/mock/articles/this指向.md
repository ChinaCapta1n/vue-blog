## this 指向分析

- 一个让人困惑的问题：
  - 定义一个函数，采用三种不同的方式对它进行调用，产生三种不同的结果：

```js
// 定义函数
function foo() {
  console.log("foo函数: ", this);
}

// 方式一：直接调用
foo(); // window

// 方式二：通过对象调用
var obj = {
  name: "k",
};
obj.foo = foo;
obj.foo(); // obj

// 方式三：通过call/apply调用
foo.call("abc"); // String {"abc"} 对象
```

- 这个 demo 可以给我们怎样的启示呢？

  - 1.  函数在调用时，JavaScript 默认会给 this 绑定一个值
  - 2.  this 的绑定和定义的位置(编写的位置)没有关系
  - 3.  this 的绑定和调用方式以及调用的位置有关系
  - 4.  this 是运行时被绑定的

- 那么 this 到底是怎样的绑定规则呢？
  - 绑定一：默认绑定
  - 绑定二：隐式绑定
  - 绑定三：显示绑定
  - 绑定四：new 绑定

## 绑定规则一：默认绑定

- 什么情况下使用默认绑定呢？独立函数调用
  - 独立的函数调用可以理解成函数没有被绑定到函数某个对象上进行调用

```js
function foo() {
  console.log(this);
}

// 1. 普通的函数被独立调用
foo();

// 2. 函数定义在对象中，但是独立调用
var obj = {
  name: "a",
  bar: function () {
    console.log(this);
  },
};

var baz = obj.bar;
baz();

// 3. 严格模式下，独立调用的函数中的this指向的是undefined
("use strict"); // this会指向undefined
```

- 常见的默认绑定：
- 案例一：

```js
function test1() {
  console.log(this);
  test2();
}

function test2() {
  console.log(this);
  test3();
}

function test3() {
  console.log(this);
}

test1();
```

案例二：

```js
function foo(func) {
  func();
}

var obj = {
  name: "a",
  bar: function () {
    console.log(this);
  },
};

foo(obj.bar);
```

## 绑定规则二：隐式绑定

- 通过某个对象进行调用，也就是它的调用位置中，是通过某个对象发起的函数调用

- 几个 demo
- 案例一

```js
function foo() {
  console.log("foo函数: ", this);
}

var obj = {
  bar: foo,
};

obj.foo(); // obj
```

- 案例二

```js
function foo() {
  console.log(this);
}

var obj1 = {
  name: "obj1",
  foo: foo,
};

var obj2 = {
  name: "obj2",
  obj1: obj1,
};

obj2.obj1.foo();
```

- 案例三

```js
function foo() {
  console.log(this);
}

var obj1 = {
  name: "obj1",
  foo: foo,
};

var baz = obj1.foo;
baz(); // window
```

## 显示绑定

## new 绑定

- JavaScript 中的函数可以当做一个类的构造函数来使用，也就是使用 new 关键字
