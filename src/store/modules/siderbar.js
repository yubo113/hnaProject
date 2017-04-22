const state = {
    csr: [{
            name: 'CSR报告',
            router: '/index/csr/csrwork',
            content: []
        }, {
            name: '新闻发言人培训',
            router: '/index/csr/newsSpokesmanTrain',
            content: []
        }, {
            name: '从业人员培训与认证',
            router: '/index/csr/staffTrain',
            content: []
        }, {
            name: '十佳项目评选',
            router: '/index/csr/topTenSelection',
            content: []
        }, {
            name: 'CSR论坛',
            router: '/index/csr/csrForum',
            content: []
        }, {
            name: '每周责任观察',
            router: '/index/csr/weeklyObserve',
            content: []
        }, {
            name: 'CSR工作专刊',
            router: '/index/csr/monthly',
            content: []
        }, {
            name: '海航开放日',
            router: '/index/csr/openDay',
            content: []
        }, {
            name: 'CSR对外活动',
            router: '/index/csr/activity',
            content: []
        }, {
            name: 'CSR评估',
            router: '/index/csr/assessment',
            content: []
        }, {
            name: 'CSR奖项申报',
            router: '/index/csr/award',
            content: []
        }],
    csrIndex: 0,
    csrFlow: {
        router: '/index/csr/csrwork',
        params: {}
    },
    //  共享资源库
    shareIndex: 0
};

// getters
const getters = {
};

// actions
const actions = {
};

// mutations
const mutations = {
    /*
     *  设置菜单选中index
     *  index: 返回的选中当前菜单
     */
	setCsrIndex: function (state, index) {
        state.csrIndex = index;
    },
    /*
     *  设置菜单选中index
     *  opt: 返回的将要跳转的信息(对象) router:路由地址 params:传递信息
     */
    setCsrFlow: function (state, opt) {
        state.csrFlow.router = opt.router || '/index/csr/csrwork';
        state.csrFlow.params = opt.params || {};
    },
    /*  (共享资源库)
     *  设置菜单选中index
     *  index: 返回的选中当前菜单
     */
    setShareIndex: function (state, index) {
        state.shareIndex = index;
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
