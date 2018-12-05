//引入 mockjs 模块
import Mock from "mockjs";
Mock.mock('http://test.cn', {//输出数据
  "array|1-10": [
    {
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ],
      "value|+1": [
        "Hello",
        "Mock.js",
        "!"
      ],
    }
  ]

  //还可以自定义其他数据
});
