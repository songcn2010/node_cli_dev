#! node

const fs = require('fs');

fs.mkdir(process.argv[2], err => {
  if(!err){
    console.log(process.argv[2] + "——文件夹创建成功")
  }
} )
