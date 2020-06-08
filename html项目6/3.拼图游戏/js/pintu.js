//获取画布对象
var c = document.getElementById('myCanvas');
//获取2D的context对象
var ctx = c.getContext('2d');

var img = new Image();
img.src = "image/pintu.jpg";
img.onload = function() {
	generateNum();
	drawCanvas();
}

//定义初始方块位置
var num = [
	[00, 01, 02],
	[10, 11, 12],
	[20, 21, 22]
];

//打乱拼图的位置
function generateNum() {
	for (var i = 0; i < 50; i++) {
		var i1 = Math.round(Math.random() * 2);
		var j1 = Math.round(Math.random() * 2);
		var i2 = Math.round(Math.random() * 2);
		var j2 = Math.round(Math.random() * 2);
		var temp = num[i1][j1];
		num[i1][j1] = num[i2][j2];
		num[i2][j2] = temp;
	}
}

//定义拼图小方块的边长
var w = 100;
//绘制拼图
function drawCanvas() {
	//清空画布
	ctx.clearRect(0, 0, 300, 300);
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (num[i][j] != 22) {
				var row = parseInt(num[i][j] / 10);
				var col = num[i][j] % 10;
				ctx.drawImage(img, col * w, row * w, w, w, j * w, i * w, w, w);
			}
		}
	}
}

//监听鼠标点击事件
c.onmousedown = function(e) {
	var bound = c.getBoundingClientRect();
	var x = e.pageX - bound.left;
	var y = e.pageY - bound.top;

	var row = parseInt(y / w);
	var col = parseInt(x / w);

	//如果当前点击的不是空白区域
	if (num[row][col] != 22) {
		detectBox(row, col);
		drawCanvas();
		var isWin = checkWin();
		if (isWin) {
			//清除计时器
			clearInterval(timer);
			ctx.drawImage(img, 0, 0);
			ctx.font = "bold 68px serif";
			ctx.fillStyle = "red";
			ctx.fillText("游戏成功！", 20, 150);
		}
	}
}

//移动点击的方块
function detectBox(i, j) {
	if (i > 0) {
		if (num[i - 1][j] == 22) {
			num[i - 1][j] = num[i][j];
			num[i][j] = 22;
			return;
		}
	}
	if (i < 2) {
		if (num[i + 1][j] == 22) {
			num[i + 1][j] = num[i][j];
			num[i][j] = 22;
			return;
		}
	}
	if (j > 0) {
		if (num[i][j - 1] == 22) {
			num[i][j - 1] = num[i][j];
			num[i][j] = 22;
			return;
		}
	}
	if (j < 2) {
		if (num[i][j + 1] == 22) {
			num[i][j + 1] = num[i][j];
			num[i][j] = 22;
			return;
		}
	}
}

//胜利判断
function checkWin() {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (num[i][j] != i * 10 + j) {
				return false;
			}
		}
	}
	return true;
}

//获取游戏计时文本区域对象
var time = document.getElementById("time");
//初始化计时器的时分秒
var h = 0,
	m = 0,
	s = 0;

function getCurrentTime() {
	//将时分秒转换为整数以便进行自增或赋值
	s = parseInt(s);
	m = parseInt(m);
	h = parseInt(h);

	//每秒变量s先自增1
	s++;
	if (s == 60) {
		s = 0;
		m++;
	}
	if (m == 60) {
		m = 0;
		h++;
	}

	//修改时分秒的显示效果，使其保持两位数
	if (s < 10)
		s = "0" + s;
	if (m < 10)
		m = "0" + m;
	if (h < 10)
		h = "0" + h;
	time.innerHTML = h + ":" + m + ":" + s;
}

//重新开始游戏
function restartGame() {
	//清除计时器
	clearInterval(timer);
	//时间清零
	s = 0;
	m = 0;
	h = 0;
	//重新显示时间
	getCurrentTime();
	timer = setInterval("getCurrentTime()", 1000);

	//重新打乱拼图顺序
	generateNum();
	drawCanvas();

}

//每隔1000毫秒（1秒）刷新一次时间
var timer = setInterval("getCurrentTime()", 1000);
