## postcss

1. 初始化项目

```shell
npm init -y
```

2. 安装依赖

```shell
yarn add -dev postcss postcss-cli
```

3. 编译 scss

```shell
npx postcss style.css(from) -o dist.css(to)
```

## autoprefixer

1. 安装依赖

```shell
yarn add -dev autoprefixer
```

2. 使用

- 命令行使用

```shell
npx postcss style.css -o dist.css -u autoprefixer
```

- 配置文件使用
  根目录下创建 postcss.config.js 文件

```js
module.exports = {
    plugins: {
        require("autoprefixer")
    }
}
```

```shell
npx postcss style.css -o dist.css
```

## browserslist

```json
{
    "browserslist": {
        "cover 99.5%"
    }
}
```
