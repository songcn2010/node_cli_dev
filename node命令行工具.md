# node开发简易命令行工具(这里用新建自命名文件夹为例)
## 基本流程
- 创建一个文件夹(`mkdir newcli`)
- 进入文件夹(`cd newcli`)
- 初始化生成package.json(`npm init -y`)
- 创建执行文件(`touch index.js`)
- 在`index.js`中顶部添加`#! node`
  - 表示可以直接运行index.js
  - 然后在下面写逻辑代码
- 最后在package.json中添加命令的执行语句
```json
  "bin": {
    "index": "index.js"
  }
```
  - 其中index表示的是之后命令行中的命令
- 然后安装到全局`npm i . -g`
- 即可使用该功能的命令

## 细节
- 获取命令的参数
  - 如输入命令`index test`要创建名为test的文件夹
  - 在node执行文件中，通过`process.argv[2]`获取到`test`这个命令参数