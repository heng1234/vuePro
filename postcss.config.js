module.exports = {
  plugins: {
    /*自适应*/
    autoprefixer: {},
      "postcss-pxtorem": {
          "rootValue": 99, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
          "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
      }

  }
}
