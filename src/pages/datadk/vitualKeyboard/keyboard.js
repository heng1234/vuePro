var keyboard = (function () {
	var keyboardObj = document.getElementById('keyboard'), _inputID, _shiftStatus = false, _capsLock = false, cStr = '', isShowAll = false,
		top = 0, height = 0
	//汉字提示区
	var path = document.getElementsByClassName('chinesePrompt-box')[0], arrowUp = document.querySelector('.up'), arrowDown = document.querySelector('.down'), showInput = document.querySelector('.showInput')
	arrowUp.onclick = function (e) {
		e.stopPropagation()
		if (top) {
			top += 40
			path.style.top = top + 'px'
		} else return false

	}
	arrowDown.onclick = function (e) {
		e.stopPropagation()
		if (Math.abs(top) >= height - 40) {
			return false
		}
		else {
			top -= 40
			path.style.top = top + 'px'
		}

	}

	//数据初始化
	function dataInit() {
		cStr = ''
		isShowAll = false
		top = 0
		height = 0
		showInput.innerText = ''
		path.innerHTML = ''
		path.style.top = '0px'
	}
	// 显示虚拟键盘
	var _showKeyboard = function () {
		keyboardObj.style.display = 'block';
	}
	// 隐藏虚拟键盘
	var _hideKeyboard = function () {
		keyboardObj.style.display = 'none';
	}
	//音转字
	var _changeChinese = function (str) {
		str ? cStr += str : cStr = cStr.substring(0, cStr.length - 1)
		let chinese = _dictionary[cStr]
		if (cStr.length === 0) { dataInit(); return }
		showInput.innerText = cStr
		if (!chinese) {
			isShowAll = true
		} else {
			isShowAll = false
		}
		if (!isShowAll) {
			path.innerHTML = ''
			let arr = chinese.split('')
			let flag = document.createDocumentFragment()
			arr.map(function (el, index) {
				var span = document.createElement('span')
				span.innerText = index + 1 + '、' + el
				flag.appendChild(span)
			})
			path.appendChild(flag)
			height = window.getComputedStyle(path, null)['height'].replace('px', '')
		}
	}
	// 获取输入框的内容
	var _getInputContent = function () {
		var inputContent = document.getElementById(_inputID).value
		return inputContent;
	}
	// 输入新内容
	var _inputNewContent = function (str) {
		document.getElementById(_inputID).value = str;
	}

	// 添加classname
	function _addClass(obj, cls) {
		var obj_class = obj.className,
			blank = obj_class != '' ? ' ' : '';
		var added = obj_class + blank + cls;
		obj.className = added;

	}
	// 删除classname
	function _removeClass(obj, cls) {
		var obj_class = ' ' + obj.className + ' ';
		obj_class = obj_class.replace(/(\s+)/gi, ' ');
		var removed = obj_class.replace(' ' + cls + ' ', ' ');
		removed = removed.replace(/(^\s+)|(\s+$)/g, '');
		obj.className = removed;
	}
	// 为按钮添加active
	function _addActive(cls, keycode) {
		var keys = document.getElementsByClassName(cls);
		for (var o of keys) {
			if (o.getAttribute('data-kid') == keycode) {
				_addClass(o, 'active');
			}
		}
	}
	// 为按钮取消active
	function _removeActive(cls, keycode) {
		var keys = document.getElementsByClassName(cls);
		for (var o of keys) {
			if (o.getAttribute('data-kid') == keycode) {
				_removeClass(o, 'active');
			}
		}
	}

	// 添加shift状态
	var _addShift = function () {
		_addActive('keysCmd', 16);
		return _shiftStatus = true;
	}
	// 取消shift状态
	var _removeShift = function () {
		_removeActive('keysCmd', 16);
		return _shiftStatus = false;
	}

	// 添加CapsLock状态
	var _addCapsLock = function () {
		_addActive('keysCmd', 20);
		return _capsLock = true;
	}
	// 取消CapsLock状态
	var _removeCapsLock = function () {
		_removeActive('keysCmd', 20);
		return _capsLock = false;
	}

	//给中文区域添加点击事件
	path.onclick = function (e) {
		var strArr = _getInputContent().split('')
		strArr.push(e.target.innerText.slice(-1))
		cStr = ''
		_inputNewContent(strArr.join(''))
		dataInit()
	}
	// 给按钮绑定触发键盘事件的事件
	var _bindEvent = function () {
		// 字母按键
		var keys = keyboardObj.getElementsByClassName('keys');
		for (var o of keys) {
			o.onclick = function () {
				if (_shiftStatus && !_capsLock) {
					var str = this.innerText.toLowerCase()
					_changeChinese(str)
				}
				else {
					dataInit()
					var strArr = _getInputContent().split('')
					if (_capsLock) {
						strArr.push(this.innerHTML.toUpperCase())
						_inputNewContent(strArr.join(''))
					} else {
						strArr.push(this.innerHTML.toLowerCase())
						_inputNewContent(strArr.join(''))
					}
				}
			}
		}
		// 数字及特殊符号按键
		var keys_d = document.getElementsByClassName('keys_d');
		for (var o of keys_d) {
			o.onclick = function () {
				dataInit()
				var strArr = _getInputContent().split('');
				var key1 = this.getElementsByTagName('div')[0].innerHTML;
				var key2 = this.getElementsByTagName('div')[1].innerHTML;
				if (_shiftStatus) {
					strArr.push(key1);
				} else { strArr.push(key2); }
				_inputNewContent(strArr.join(''));
			}
		}

		// shift、capslock、enter、tab、backspace 按钮
		var keysCmd = document.getElementsByClassName('keysCmd');
		for (var o of keysCmd) {
			o.onclick = function (e) {
				var strArr = _getInputContent().split('');
				var keyCode = this.getAttribute('data-kid');
				if (keyCode == 8) {
					_changeChinese()
					strArr.pop();
					_inputNewContent(strArr.join(''));
				} else if (keyCode == 9) {
					strArr.push('&nbsp;&nbsp;');
					_inputNewContent(strArr.join(''));
				} else if (keyCode == 13) {
					strArr.push('\n');
					_inputNewContent(strArr.join(''));
				} else if (keyCode == 32) {
					strArr.push('&nbsp;');
					_inputNewContent(strArr.join(''));
				} else if (keyCode == 16) {
					if (!_shiftStatus) { _addShift(); } else { _removeShift(); }
				} else if (keyCode == 20) {
					if (!_capsLock) { _addCapsLock(); } else { _removeCapsLock(); }
				}
			}
		}
	}

	var keyboard = function () { }

	// 输入框绑定键盘
	keyboard.prototype.addKeyboard = function (id) {
		_inputID = id
		var inputObj = document.getElementById(id);
		inputObj.onclick = _showKeyboard;
		_bindEvent();
	}

	return keyboard;
})()