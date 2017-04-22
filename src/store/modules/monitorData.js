const state = {
	//	charitable-parter(项目发展-合作伙伴:搜索条件)
	charitablePartner: '',
	//	monitorData(核心数据监控中搜索条件)
	startTime: '2016-01-01',
	endTime: '2017-01-01',
	searchName: '',
	//	media-info(传播事务中-媒体信息库:搜索条件)
	mediaInfo: '',
	//	news-release(传播事务中-新闻发稿:搜索条件)
	news: ''
};

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
};

// actions
const actions = {
};

// mutations
const mutations = {
	/*
	 *	设置charitable-parter的存储搜索条件
	 *	name: 项目名称
	 */
	setCharitablePartner: function (state, opt) {
		state.charitablePartner = name;
	},
	/*
	 *	设置monitorData的存储搜索条件
	 *	opt: 1.开始时间,2.结束时间,3.广告点位名称
	 */
	setMonitorData: function (state, opt) {
		state.startTime = opt.start;
		state.endTime = opt.end;
		state.searchName = opt.name;
	},
	/*
	 *	设置news-release(传播事务中-新闻发稿)的存储搜索条件
	 *	name: 新闻信息
	 */
	setNewsRelease: function (state, name) {
		state.news = name;
	},
	/*
	 *	设置media-info(传播事务中-媒体信息库)的存储搜索条件
	 *	name: 媒体信息
	 */
	setMediaInfo: function (state, name) {
		state.mediaInfo = name;
	}
};

export default {
  state,
  getters,
  actions,
  mutations
};
