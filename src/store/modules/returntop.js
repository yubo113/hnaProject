const state = {
  returnTop: false
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
	returnTopShow: function () {
		state.returnTop = true;
	},
	returnTopHide: function () {
		state.returnTop = false;
	}
};

export default {
  state,
  getters,
  actions,
  mutations
};
