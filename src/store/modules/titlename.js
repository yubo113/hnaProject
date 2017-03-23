const state = {
  titleName: ''
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
	changeTitle: function (state, name) {
		state.titleName = name;
	}
};

export default {
  state,
  getters,
  actions,
  mutations
};
