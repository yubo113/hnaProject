const state = {
	//	公益项目统计当前tab选择标识
	openTab: 0,
	//	1.搜索条件选中 2.查询条件存储(合作项目统计:合作伙伴统计器图表)
	partnerSelected: {
		value: '',				//	选中条件
		option: ''				//	条件列表
	},
	partnerChart: null,
	//	1.搜索条件选中 2.查询条件存储(公益项目统计:公益项目统计器图表)
	projectSelected: {
		value: '',
		option: '',
		start: 6,				//	开始时间数组下标(时间数组是写死的)
		end: 7					//	结束时间数字下标
	},
	projectChart: {
		xAxis: null,			//	柱状图x轴
		yAxis: null				//	柱状图y轴
	},
	//	1.搜索条件选中 2.查询条件存储(公益项目统计:资源统计器图表)
	sourceSelected: {
		nameValue: '',						//	项目名称选中多选条件
		optionMul: '',						//	项目名称多选条件列表
		stageValue: '',						//	选中领域条件
		optionSta: '',						//	领域条件列表
		statueValue: '',					//	选中状态条件
		optionStatue: '',					//	状态条件列表
		start: '2016-01-01',				//	开始时间
		end: '2017-01-01'					//	结束时间
	},
	sourceChart: {
		title: '',
		xAxis: null,
		yGoods: null,
		yMoney: null
	}
};

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
};

// actions
const actions = {};

// mutations
const mutations = {
	/*	存储点击tab状态
	 *	index: 点击当前标识
	 */
	setOpenTab: function (state, index) {
		state.openTab = index;
	},
	/*	存储搜索条件(合作伙伴统计)
	 *	value: 选中状态		option: 选择项
	 */
	setPartnerSelect: function (state, opt) {
		state.partnerSelected.value = opt.value;
		state.partnerSelected.option = opt.option;
	},
	/*	存储图表数据
	 *	services: 图表数据
	 */
	setPartnerChart: function (state, services) {
		state.partnerChart = services;
	},
	/*	存储搜索条件(公益项目统计)
	 *	value: 选中状态	option: 选择项
	 */
	setProjectSelect: function (state, opt) {
		state.projectSelected.value = opt.value;
		state.projectSelected.option = opt.option;
		state.projectSelected.start = opt.start;
		state.projectSelected.end = opt.end;
	},
	/*	存储图表数据
	 *	services: 图表数据
	 */
	setProjectChart: function (state, opt) {
		state.projectChart.xAxis = opt.x;
		state.projectChart.yAxis = opt.y;
	},
	/*	存储搜索条件(资源统计)
	 *	参数详见state中
	 */
	setSourceSelect: function (state, opt) {
		state.sourceSelected.nameValue = opt.nameValue;
		state.sourceSelected.optionMul = opt.optionMul;
		state.sourceSelected.stageValue = opt.stageValue;
		state.sourceSelected.optionSta = opt.optionSta;
		state.sourceSelected.statueValue = opt.statueValue;
		state.sourceSelected.optionStatue = opt.optionStatue;
		state.sourceSelected.start = opt.start;
		state.sourceSelected.end = opt.end;
	},
	/*	存储图表数据
	 *	services: 图表数据
	 */
	setSourceChart: function (state, opt) {
		state.sourceChart.title = opt.title;
		state.sourceChart.xAxis = opt.x;
		state.sourceChart.yGoods = opt.yGoods;
		state.sourceChart.yMoney = opt.yMoney;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
