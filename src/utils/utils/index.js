import md532 from "./md5_32.js";


//获取cookie
function getCookie(_name) {
  var port = document.location.port;
  var name = _name + port;
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
}

//写入cookies
function setCookie(_name, value, days) {
  var name = _name + document.location.port;
  var Days = days || 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
}

//清除cookie
function clearCookie(name) {
  setCookie(name, "", -1);
}

//platform
function platform(context) {
  return 2;
}

//channel_code
function channel_code(context) {
  return "web"; //TEA_MARKET
}

// 获取系统类型
function getSysName() {
  return "TEA_B2C";
}

// device_id
function getDeviceId(context) {
  function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  }

  var deviceId = getCookie('DEVICEID');
  setCookie('DEVICEID', deviceId, 365);
  if (!deviceId) {
    deviceId = uuid();
    setCookie('DEVICEID', deviceId, 365);
  }
  return deviceId;
}

//弹窗提示
function toast(text, time, cb) {
  var body = window.document.body;
  var toast = document.createElement("div");
  toast.className = 'nlx_toast';
  body.appendChild(toast);
  toast.innerHTML = text;
  toast.style.backgroundColor = 'rgba(0,0,0,.6)';
  setTimeout(function () {
    if (typeof (cb) == 'function') {
      cb();
    }
    body.removeChild(toast);
  }, time);
}

function deepClone(data) {
  var type = (typeof data == 'object') ? (Array.isArray(data) ? 'array' : 'object') : "other";
  var obj;
  if (type === 'array') {
    obj = [];
  } else if (type === 'object') {
    obj = {};
  } else {
    //不再具有下一层次
    return data;
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === 'object') {

    for (var key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}

function isInArray(arr, str) {
  var result = false;
  arr.forEach((element) => {
    if (element == str) {
      result = true;
    }
  })
  return result;
}

/* 参数是秒 */
function changeTime(time) {
  let timeShow;
  var days = parseInt(time / (60 * 60 * 24));
  var hours = parseInt((time % (60 * 60 * 24)) / (60 * 60));
  var minutes = parseInt((time % (60 * 60)) / (60));
  var seconds = parseInt(time % (60));
  hours = hours < 10 ? ('0' + hours) : hours;
  minutes = minutes < 10 ? ('0' + minutes) : minutes;
  seconds = seconds < 10 && seconds >= 1 ? ('0' + seconds) : seconds;
  timeShow = days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
  return timeShow;

}



/*
 * 函数定义
 * 入口参数telephone
 * 用户输入的电话内容
 */
function verifyPhone(phone) {
  let phoneReg = /^1([38]\d|4[7]|5[0-35-9]|7[35678])\d{8}$/;
  if (!phoneReg.test(phone)) {
    return false;
  }
  return true;
}

function verifyTel(tel){
  let phoneReg = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$|^\d{11}$/;
  if (!phoneReg.test(tel)) {
    return false;
  }
  return true;
}

/**
 * 校验密码,6-20位,大小写字母,数字和特殊字符
 * @param pwd
 */
function verifyPwd(pwd) {
  var regex = new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_]+$)(?![a-z0-9]+$)(?![a-z\\W_]+$)(?![0-9\\W_]+$)[a-zA-Z0-9\\W_]{6,16}$');
  if (!regex.test(pwd)) {
    return true
  } else {
    return false
  }
}

/**
 * 校验6位数字邮编
 * @param zipCode
 * @returns {boolean}
 */
function isZipCode(zipCode) {
  return /^\d{6}$/.test(zipCode);
}

/**
 * 校验传真格式
 * @param fax
 * @returns {boolean}
 */
function isFax(fax) {
  return /^(\d{3,4}-)?\d{7,8}$/.test(fax);
}

//判断字符是否为空的方法
function isEmpty(obj) {
  if (typeof obj == "undefined" || obj == null || obj == "") {
    return true;
  } else {
    return false;
  }
}

/*
 * 函数定义
 * 入口参数email
 * 用户输入的邮箱内容
 */
function verifyEmail(email) {
  let mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (!mailReg.test(email)) {
    return false;
  }
  return true;
}

/**
 * 函数定义
 * 获取默认当天日期以及上一个月的日期
 */
function getNowLastMonth() {
  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  mm = mm > 10 ? mm : 0 + mm;
  let dd = date.getDate();
  return [`${yyyy}-${mm - 1}-${dd} 00:00:00`, `${yyyy}-${mm}-${dd} 23:59:59`];
}
/**
 * 获取当天日期以及下一个月的日期
 */
function getNowNextMonth() {
  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  mm = mm > 10 ? mm : 0 + mm;
  let dd = date.getDate();
  return [`${yyyy}-${mm }-${dd} 00:00:00`, `${yyyy}-${mm+ 1}-${dd} 23:59:59`];
}
/**
 * 获取当天日期
 */
function getTodayDate() {
  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  mm = mm > 10 ? mm : 0 + mm;
  let dd = date.getDate();
  return `${yyyy}-${mm}-${dd}`;
}
/**
 * 获取当前时间 YYYY-MM-DD HH:MM:SS
 */
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + hour + seperator2 + minute
    + seperator2 + second;
  return currentdate;
}

/**
 * 根据传入时间戳获取年月日时分秒 YYYY-MM-DD HH:MM:SS
 */
function add0(m){return m<10?'0'+m:m }
//时间戳转化成时间格式
function timeFormat(timestamp){
  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year+'-'+add0(month)+'-'+add0(date)+' '+add0(hours)+':'+add0(minutes)+':'+add0(seconds);
}

  //秒转换为天小时分钟秒
  function formatSeconds (value) {
    var theTime = parseInt(value);// 需要转换的时间秒 
    var theTime1 = 0;// 分 
    var theTime2 = 0;// 小时 
    var theTime3 = 0;// 天
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
            if (theTime2 > 24) {
                theTime3 = parseInt(theTime2 / 24);
                theTime2 = parseInt(theTime2 % 24);
            }
        }
    }
    var result = '';
    if (theTime > 0) {
        result = "" + parseInt(theTime) + "秒";
    }
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + "分钟" + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + "小时" + result;
    }
    if (theTime3 > 0) {
        result = "" + parseInt(theTime3) + "天" + result;
    }
    return result;
}

function downLoadFile(blob, fileName) {
	fileName = fileName || '未命名';
	if (navigator.msSaveBlob) {
		return navigator.msSaveBlob(blob, fileName);
	} else {
		const objectUrl = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = objectUrl;
		link.setAttribute("download", fileName);
		document.body.appendChild(link);
		link.click();
	}
}

function toTree(data) {
  let result = []
  if(!Array.isArray(data)) {
      return result
  }
  let map = {};
  data.forEach(item => {
      map[item.resourceId] = item;
  });
  data.forEach(item => {
      let parent = map[item.parentId];
      if(parent) {
          (parent.children || (parent.children = [])).push(item);
      } else {
          result.push(item);
      }
  });
  return result;
}

function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if(isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if(fIEVersion == 7) {
          return 7;
      } else if(fIEVersion == 8) {
          return 8;
      } else if(fIEVersion == 9) {
          return 9;
      } else if(fIEVersion == 10) {
          return 10;
      } else {
          return 6;//IE版本<=7
      }   
  } else if(isEdge) {
      return 'edge';//edge
  } else if(isIE11) {
      return 11; //IE11  
  }else{
      return -1;//不是ie浏览器
  }
}

var utils = {
  md532: md532.md532,//注：郑鑫鑫要求我们茶市四期这边密码都是md5加密并且是32位的
  getSysName: getSysName,
  getCookie: getCookie,
  clearCookie: clearCookie,
  setCookie: setCookie,
  platform: platform,
  channel_code: channel_code,
  getDeviceId: getDeviceId,
  toast: toast,
  deepClone: deepClone,
  isInArray: isInArray,
  changeTime: changeTime,
  verifyPhone,
  verifyTel,
  isZipCode,
  isFax,
  isEmpty,
  verifyEmail,
  getNowLastMonth,
  getTodayDate,
  getNowFormatDate,
  verifyPwd,
  timeFormat,
  getNowNextMonth,
  IEVersion,
  formatSeconds,
  downLoadFile,
  toTree
};

export default utils;
