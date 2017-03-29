const csrworkStatus = function (value) {
	if (value === 1) {
		return 'success';
	} else {
		return 'failed';
	}
};

const filesNum = function (value) {
	let fileSum = value.split('|').length - 1;
	return fileSum;
};

const filesAgree = function (value) {
	if (value === '0') {
		return '否';
	} else {
		return '是';
	}
};

export default {
	csrworkStatus,
	filesNum,
	filesAgree
};
