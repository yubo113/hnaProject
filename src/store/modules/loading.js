import { Toast } from 'mint-ui';
const state = {
	loadingShow: true
};

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
};

// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.added]
  //   commit(types.CHECKOUT_REQUEST)
  //   shop.buyProducts(
  //     products,
  //     () => commit(types.CHECKOUT_SUCCESS),
  //     () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  //   )
  // }
};

// mutations
const mutations = {
	loadingShow: function () {
		state.loadingShow = true;
	},
	loadingHide: function () {
		state.loadingShow = false;
	},
	tipShow: function () {
		let instance = Toast({
			message: '操作成功',
			iconClass: 'fa fa-check'
		});
		setTimeout(() => {
			instance.close();
		}, 1500);
	}
};

export default {
  state,
  getters,
  actions,
  mutations
};
