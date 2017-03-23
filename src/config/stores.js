import siderbarMoudles from '../store/modules/siderbar';
import titlenameMoudles from '../store/modules/titlename';
import loadingMoudles from '../store/modules/loading';
export default {
	state: {
		status: false
	},
	mutations: {
		sideStatus (state) {
			state.status = !state.status;
		}
	},
	modules: {
		siderbar: siderbarMoudles,
		titlename: titlenameMoudles,
		loading: loadingMoudles
	}
};
