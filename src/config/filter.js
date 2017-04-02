/* 传过数字1和0
 * value:传入数字
 * 返回success和failed
 */
const csrworkStatus = function (value) {
	if (value === 1) {
		return 'success';
	} else {
		return 'failed';
	}
};

/* 分割字符串,以 '|' 为基础(用于分割文件地址)
 * value:文件地址字符串
 * 返回数组
 */
const filesNum = function (value) {
	let fileSum = value.split('|').length - 1;
	return fileSum;
};

/* 传过数字1和0
 * value:传入字符串
 * 返回 '是' 和 '否'
 */
const filesAgree = function (value) {
	if (value === '0') {
		return '否';
	} else {
		return '是';
	}
};

/* 更改时间格式，输出yyyy-mm--dd字符串日期
 * time:传入的时间(日期对象类型)
 * 如：Mon Feb 06 2017 09:43:15 GMT+0800 (中国标准时间) --> 2017-02-06
 */
 const timeStrFormat = function (time) {
     const seperator = '-';
     let month = time.getMonth() + 1;
     let strDate = time.getDate();
     if (month >= 1 && month <= 9) {
         month = `0${month}`;
     }
     if (strDate >= 0 && strDate <= 9) {
         strDate = `0${strDate}`;
     }
     const currentdate = time.getFullYear() + seperator + month + seperator + strDate;
     return currentdate;
 };

 /* 更改时间格式，输出yyyy-mm--dd HH:MM:DD字符串日期
  * time:传入的时间(日期对象类型)
  */
 const timeStrAllFormat = function (time) {
     const seperator = '-';
     const seperator1 = ':';
     let month = time.getMonth() + 1;
     let strDate = time.getDate();
     let strhour = time.getHours();
     let strminute = time.getMinutes();
     let second = time.getSeconds();
     if (month >= 1 && month <= 9) {
         month = `0${month}`;
     }
     if (strDate >= 0 && strDate <= 9) {
         strDate = `0${strDate}`;
     }
     if (strhour >= 0 && strhour <= 9) {
         strhour = `0${strhour}`;
     }
     if (strminute >= 0 && strminute <= 9) {
         strminute = `0${strminute}`;
     }
     if (second >= 0 && second <= 9) {
         second = `0${second}`;
     }
     const currentdate = `${time.getFullYear()}${seperator}${month}${seperator}${strDate} ${strhour}${seperator1}${strminute}${seperator1}${second}`;
     return currentdate;
 };

export default {
	csrworkStatus,
	filesNum,
	filesAgree,
	timeStrFormat,
	timeStrAllFormat
};
