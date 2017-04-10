const state = {
	//	公益项目统计当前tab选择标识
	openTab: 0,
	//	1.搜索条件选中 2.查询条件存储(合作项目统计:合作伙伴统计器图表)
	partnerSelected: {
		value: '',
		option: ''
	},
	partnerChart: null,
	//	1.搜索条件选中 2.查询条件存储(公益项目统计:公益项目统计器图表)
	projectSelected: {
		value: '',
		option: '',
		start: 6,
		end: 7
	},
	projectChart: {
		xAxis: null,
		yAxis: null
	},
	//	1.搜索条件选中 2.查询条件存储(公益项目统计:资源统计器图表)
	sourceSelected: {},
	sourceChart: {
		xAxis: null,
		yAxis: null
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
	 *	value: 选中状态	ele:jquery元素	option: 选择项
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
	 *	value: 选中状态	ele:jquery元素	option: 选择项
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
	 *	value: 选中状态	ele:jquery元素	option: 选择项
	 */
	setSourceSelect: function (state, opt) {
		state.sourceSelected.value = opt.value;
		state.sourceSelected.option = opt.option;
		state.sourceSelected.start = opt.start;
		state.sourceSelected.end = opt.end;
	},
	/*	存储图表数据
	 *	services: 图表数据
	 */
	setSourceChart: function (state, opt) {
		state.sourceChart.xAxis = opt.x;
		state.sourceChart.yAxis = opt.y;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
