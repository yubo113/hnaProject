const state = {
  titleName: '',
  bgColor: '#d80c18'
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
	 *	设置头部titleName
	 *	name: titleName
	 */
	changeTitle: function (state, name) {
		state.titleName = name;
	},
	/*
	 *	设置背景颜色
	 *	color: 设置的背景颜色
	 */
	setBgColor: function (state, color) {
		state.bgColor = color;
	}
};

export default {
  state,
  getters,
  actions,
  mutations
};
