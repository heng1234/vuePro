<template>
  <div class="vitualKeyboard" style="position: relative" >
      <div class="search" :style="{top:topPx,left:leftPx}">
          <textarea name="inputArea" type="text"  style="background-color: #ffffff;border:1px solid  #ccc;width: 523px;height: 73px" id="inputArea"  :placeholder="placeholder" v-model="value"></textarea>
      </div>
       <div class="keyboardBox" id="keyboard" style='display: block;'>
          <p class="showInput"></p>
          <hr>
        <div class="chinesePrompt">

            <div class="arrow">
                <i class="up" ></i>
                <i class="down"></i>
            </div>

            <div class="chinesePrompt-box">
               <div>
                <span class = "span" v-for="(item,index) in chinese" :key="index">{{item}}</span>
               </div>

            </div>
        </div>
        <div class="line gap_t">
            <div class="keys_d t-a-l" data-kid="192"><div>~</div><div>`</div></div>
            <div class="keys_d t-a-l" data-kid="49"><div>!</div><div>1</div></div>
            <div class="keys_d t-a-l" data-kid="50"><div>@</div><div>2</div></div>
            <div class="keys_d t-a-l" data-kid="51"><div>#</div><div>3</div></div>
            <div class="keys_d t-a-l" data-kid="52"><div>$</div><div>4</div></div>
            <div class="keys_d t-a-l" data-kid="53"><div>%</div><div>5</div></div>
            <div class="keys_d t-a-l" data-kid="54"><div>^</div><div>6</div></div>
            <div class="keys_d t-a-l" data-kid="55"><div>&amp;</div><div>7</div></div>
            <div class="keys_d t-a-l" data-kid="56"><div>*</div><div>8</div></div>
            <div class="keys_d t-a-l" data-kid="57"><div>(</div><div>9</div></div>
            <div class="keys_d t-a-l" data-kid="48"><div>)</div><div>0</div></div>
            <div class="keys_d t-a-l" data-kid="189"><div>_</div><div>-</div></div>
            <div class="keys_d t-a-l" data-kid="187"><div>+</div><div>=</div></div>
            <div class="keysCmd k-w-80 l-h-40 f-s-14" data-kid="8">Backspace</div>
        </div>
        <div class="line">
            <div class="keysCmd k-w-50" data-kid="9">Tab</div>
            <div class="keys" data-kid="81">Q</div>
            <div class="keys" data-kid="87">W</div>
            <div class="keys" data-kid="69">E</div>
            <div class="keys" data-kid="82">R</div>
            <div class="keys" data-kid="84">T</div>
            <div class="keys" data-kid="89">Y</div>
            <div class="keys" data-kid="85">U</div>
            <div class="keys" data-kid="73">I</div>
            <div class="keys" data-kid="79">O</div>
            <div class="keys" data-kid="80">P</div>
            <div class="keys_d t-a-l" data-kid="219"><div>{</div><div>[</div></div>
            <div class="keys_d t-a-l" data-kid="221"><div>}</div><div>]</div></div>
            <div class="keys_d k-w-75 t-a-l" data-kid="220"><div>|</div><div>\</div></div>
        </div>
        <div class="line">
            <div class="keysCmd k-w-70 f-s-14" data-kid="20">CapsLock</div>
            <div class="keys" data-kid="65">A</div>
            <div class="keys" data-kid="83">S</div>
            <div class="keys" data-kid="68">D</div>
            <div class="keys" data-kid="70">F</div>
            <div class="keys" data-kid="71">G</div>
            <div class="keys" data-kid="72">H</div>
            <div class="keys" data-kid="74">J</div>
            <div class="keys" data-kid="75">K</div>
            <div class="keys" data-kid="76">L</div>
            <div class="keys_d t-a-l" data-kid="186"><div>:</div><div>;</div></div>
            <div class="keys_d t-a-l" data-kid="222"><div>"</div><div>'</div></div>
            <div class="keysCmd key_enter" data-kid="13">Enter</div>
        </div>
        <div class="line">
            <div class="keysCmd k-w-100" data-kid="16">Shift</div>
            <div class="keys" data-kid="90">Z</div>
            <div class="keys" data-kid="88">X</div>
            <div class="keys" data-kid="67">C</div>
            <div class="keys" data-kid="86">V</div>
            <div class="keys" data-kid="66">B</div>
            <div class="keys" data-kid="78">N</div>
            <div class="keys" data-kid="77">M</div>
            <div class="keys_d t-a-l" data-kid="188"><div></div><div>,</div></div>
            <div class="keys_d t-a-l" data-kid="190"><div>></div><div>.</div></div>
            <div class="keys_d t-a-l" data-kid="191"><div>?</div><div>/</div></div>
            <div class="keysCmd k-w-120" data-kid="16">Shift</div>
        </div>
        <!-- <div class="line">
            <div class="keysCmd k-w-704" data-kid="32"></div>
        </div> -->

    </div>
  </div>
</template>

<script>
import _dictionary  from "./dictionary.js";
// import keyboard from "./keyboard.js";

export default {
  components: {},
  props: {
    placeholder: { type: String, default: "点击出中英文键盘" },
    topPx: { type: String, default: "100px" },
    leftPx: { type: String, default: "100px" },
    textValue: { type: String, default: "" },
  },
  data() {
    return {
        chinese:[],
        value:''
    //   _inputID: null,
    //   _shiftStatus: false,
    //   _capsLock: false,
    //   cStr: "",
    //   isShowAll: false,
    //   top: 0,
    //   height: 0,
    //   path: null
    };
  },
  watch:{
    value(n){
      this.searchAseetesProd();
        console.log(n)
    },

  },
  methods: {
    searchAseetesProd(){
         this.$emit("getSearchValue", this.value);
    },
    keyboard() {
        let self = this;
      var keyboardObj = document.getElementById("keyboard"),
        _inputID,
        _shiftStatus = false,
        _capsLock = false,
        cStr = "",
        isShowAll = false,
        top = 0,
        height = 0;
      //汉字提示区
      var path = document.getElementsByClassName("chinesePrompt-box")[0],
        arrowUp = document.querySelector(".up"),
        arrowDown = document.querySelector(".down"),
        showInput = document.querySelector(".showInput");
      arrowUp.onclick = function(e) {


        if (top) {
          top += 40;
          path.style.top = top + "px";
        } else return false;
      };
      arrowDown.onclick = function(e) {
        e.stopPropagation();
        console.log(top)
        console.log(height)
        if (Math.abs(top) >= height - 40) {
          return false;
        } else {
          top -= 40;
          path.style.top = top + "px";
        }
      };

      //数据初始化
      function dataInit() {
        cStr = "";
        isShowAll = false;
        top = 0;
        height = 0;
        showInput.innerText = "";
        // path.innerHTML = "";
        self.chinese = []
        path.style.top = "0px";
      }
      // 显示虚拟键盘
      var _showKeyboard = function() {
        keyboardObj.style.display = "block";
      };
      // 隐藏虚拟键盘
      var _hideKeyboard = function() {
        keyboardObj.style.display = "none";
      };
      //音转字
      var _changeChinese = function(str) {
        str ? (cStr += str) : (cStr = cStr.substring(0, cStr.length - 1));
        let chinese = _dictionary[cStr];
        if (cStr.length === 0) {
          dataInit();
          return;
        }
        showInput.innerText = cStr;
        if (!chinese) {
          isShowAll = true;
        } else {
          isShowAll = false;
        }
        if (!isShowAll) {

          let arr = chinese.split("");
            self.chinese = arr


          setTimeout(function(){
            height = window.getComputedStyle(path, null)["height"].replace("px", "");
          })

        }
      };
      // 获取输入框的内容
      var _getInputContent = function() {
        var inputContent = document.getElementById(_inputID).value;

        return inputContent;
      };
      // 输入新内容
      var _inputNewContent = function(str) {
        document.getElementById(_inputID).value = str;
         self.value = str
      };

      // 添加classname
      function _addClass(obj, cls) {
        var obj_class = obj.className,
          blank = obj_class != "" ? " " : "";
        var added = obj_class + blank + cls;
        obj.className = added;
      }
      // 删除classname
      function _removeClass(obj, cls) {
        var obj_class = " " + obj.className + " ";
        obj_class = obj_class.replace(/(\s+)/gi, " ");
        var removed = obj_class.replace(" " + cls + " ", " ");
        removed = removed.replace(/(^\s+)|(\s+$)/g, "");
        obj.className = removed;
      }
      // 为按钮添加active
      function _addActive(cls, keycode) {
        var keys = document.getElementsByClassName(cls);
        for (var o of keys) {
          if (o.getAttribute("data-kid") == keycode) {
            _addClass(o, "active");
          }
        }
      }
      // 为按钮取消active
      function _removeActive(cls, keycode) {
        var keys = document.getElementsByClassName(cls);
        for (var o of keys) {
          if (o.getAttribute("data-kid") == keycode) {
            _removeClass(o, "active");
          }
        }
      }

      // 添加shift状态
      var _addShift = function() {
        _addActive("keysCmd", 16);
        return (_shiftStatus = true);
      };
      // 取消shift状态
      var _removeShift = function() {
        _removeActive("keysCmd", 16);
        return (_shiftStatus = false);
      };

      // 添加CapsLock状态
      var _addCapsLock = function() {
        _addActive("keysCmd", 20);
        return (_capsLock = true);
      };
      // 取消CapsLock状态
      var _removeCapsLock = function() {
        _removeActive("keysCmd", 20);
        return (_capsLock = false);
      };

      //给中文区域添加点击事件
      path.onclick = function(e) {
        var strArr = _getInputContent().split("");
        strArr.push(e.target.innerText.slice(-1));
        console.log(strArr.join(""))
        cStr = "";
        _inputNewContent(strArr.join(""));
        dataInit();
      };
      // 给按钮绑定触发键盘事件的事件
      var _bindEvent = function() {
        // 字母按键
        var keys = keyboardObj.getElementsByClassName("keys");
        for (var o of keys) {
          o.onclick = function() {
            if (_shiftStatus && !_capsLock) {
              var str = this.innerText.toLowerCase();
              _changeChinese(str);
            } else {
              dataInit();
              var strArr = _getInputContent().split("");
              if (_capsLock) {
                strArr.push(this.innerHTML.toUpperCase());
                _inputNewContent(strArr.join(""));
              } else {
                strArr.push(this.innerHTML.toLowerCase());
                _inputNewContent(strArr.join(""));
              }
            }

          };
        }
        // 数字及特殊符号按键
        var keys_d = document.getElementsByClassName("keys_d");
        for (var o of keys_d) {
          o.onclick = function() {
            dataInit();
            var strArr = _getInputContent().split("");
            var key1 = this.getElementsByTagName("div")[0].innerHTML;
            var key2 = this.getElementsByTagName("div")[1].innerHTML;
            if (_shiftStatus) {
              strArr.push(key1);
            } else {
              strArr.push(key2);
            }
            _inputNewContent(strArr.join(""));
          };
        }

        // shift、capslock、enter、tab、backspace 按钮
        var keysCmd = document.getElementsByClassName("keysCmd");
        for (var o of keysCmd) {
          o.onclick = function(e) {
            var strArr = _getInputContent().split("");
            var keyCode = this.getAttribute("data-kid");
            if (keyCode == 8) {
              _changeChinese();
              strArr.pop();
              _inputNewContent(strArr.join(""));
            } else if (keyCode == 9) {
              strArr.push("&nbsp;&nbsp;");
              _inputNewContent(strArr.join(""));
            } else if (keyCode == 13) {
              strArr.push("\n");
              _inputNewContent(strArr.join(""));
            } else if (keyCode == 32) {
              strArr.push(" ");
              _inputNewContent(strArr.join(""));
            } else if (keyCode == 16) {
              if (!_shiftStatus) {
                _addShift();
              } else {
                _removeShift();
              }
            } else if (keyCode == 20) {
              if (!_capsLock) {
                _addCapsLock();
              } else {
                _removeCapsLock();
              }
            }
          };
        }
      };
        document.getElementsByClassName('vitualKeyboard')[0].onclick=function(e){
           // alert("点击文本域")
            e.stopPropagation();
        }
        document.addEventListener('click',function (e) {
            //alert("点击周围出发")
            _hideKeyboard()
        })
      var keyboard = function() {

      };

      // 输入框绑定键盘
      keyboard.prototype.addKeyboard = function(id) {
        _inputID = id;
        var inputObj = document.getElementById(id);
        inputObj.onclick = _showKeyboard;
        _bindEvent();
      };

      return keyboard;
    }
  },
  mounted() {
    if(this.textValue != ""){
      this.value = this.textValue.trim();
    }

      let fn =  this.keyboard();
      let func = new fn;

        func.addKeyboard("inputArea");

  }
};
</script>
<style  scoped>
#container {
  width: 800px;
  margin: 0 auto;
}
.search{
    width: 23%;
  height: 46px;
  position: absolute;
  right: 1%;


}
#inputArea {
    width: 109%;
    height: 95%;
  border-radius: 4px;
  font-size: 22px;
  background-color: rgb(247, 247, 247);
  text-indent: 16px;
  position: relative;
  box-sizing: border-box;
}
input[type="button"] {
  position: absolute;
  width: 64px;
  height: 100%;
  top: 0;
  right: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 2;
}
.chinesePrompt {
  width: 680px;
  height: 40px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
.arrow {
  position: absolute;
  right: 0px;
  z-index: 2999;
}
.arrow i {
  display: block;
  width: 15px;
  height: 10px;
}
.up {
  background: url("img_arrow_up.png") no-repeat;
  background-size: 15px 10px;
  margin-top: 5px;
}
.down {
  background: url("img_arrow_down.png") no-repeat;
  background-size: 15px 10px;
  margin-top: 10px;
}
.chinesePrompt .chinesePrompt-box {
  font-size: 0;
  position: relative;
  top:0;
  box-sizing: border-box;


}
.span {
    font-size: 16px;
    margin: 0;
    padding: 0;
    display: inline-block;
    line-height: 40px;
    cursor: pointer;
    color: #fff;
    width: 100px;
    height: 40px;
    text-align: center;
}
.keyboardBox {
  position: absolute;
  width: 708px;
  height: 310px;
  margin: 0;
    right: -8.52rem;
    top: 1.6rem;
  padding: 10px;
  z-index: 2018;
  background:rgb(90,179,255);

  font-size: 16px;
}
.line {
  position: relative;
  height: 50px;
  line-height: 50px;
}
.showInput {
  margin: 0;
  padding: 0 20px;
  /* position: absolute; */
  /* bottom: 0; */
  color: #333333;
  line-height: 25px;
  height: 25px;
  width: 500px;
  overflow: hidden;
  /* background: #fff; */
  /* border-bottom: 1px solid #fff; */
  text-overflow: ellipsis;
  white-space: nowrap;
}
.keys,
.keysCmd,
.keys_d {
  box-sizing: border-box;
  float: left;
  width: 45px;
  color: #5a5a5a;
  height: 45px;
  line-height: 45px;
  margin: 0 0 3px 3px;
  border-radius: 4px;
  border: 1px solid #fff;
  text-align: center;
  cursor: pointer;
  background:  #fff;
}
.keys:hover,
.keysCmd:hover,
.keys_d:hover {
  box-shadow: 0px 0px 3px #a2deda inset;
  opacity: 0.7;
}

.active {
  background-color: #2f3c3b;
  background:rgb(90,179,255);
  color:#fff;
  box-shadow: 0px 0px 3px rgb(90,179,255) inset;
}
.keys_d {
  height: 45px;
  line-height: 20px;
}
.key_enter {
  width: 102px;
}
.k-w-50 {
  width: 50px;
}
.k-w-70 {
  width: 70px;
}
.k-w-75 {
  width: 75px;
}
.k-w-80 {
  width: 80px;
}
.k-w-100 {
  width: 100px;
}
.k-w-120 {
  width: 120px;
}
.k-w-704 {
  width: 704px;
}
.gap {
  margin-left: 30px;
}
.gap_t {
  margin-top: 10px;
}
.line .l-h-40 {
  line-height: 40px;
}
.f-s-14 {
  font-size: 14px;
}
.t-a-l {
  padding-left: 15px;
  text-align: left;
}
</style>
