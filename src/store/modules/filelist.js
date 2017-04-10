const state = {
  fileList: ''
};

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
};

// actions
const actions = {};

// mutations
const mutations = {
	setFileList: function (state, fileName) {
		if (state.fileList !== fileName) {
			state.fileList = fileName;
		}
	}
};

export default {
  state,
  getters,
  actions,
  mutations
};
