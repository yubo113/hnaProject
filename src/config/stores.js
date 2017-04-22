import siderbarMoudles from '../store/modules/siderbar';
import titlenameMoudles from '../store/modules/titlename';
import loadingMoudles from '../store/modules/loading';
import returntopMoudles from '../store/modules/returntop';
import filelistMoudles from '../store/modules/filelist';
import searchresultMoudles from '../store/modules/searchresult';
import monitorDataMoudles from '../store/modules/monitorData';

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
		loading: loadingMoudles,
		returntop: returntopMoudles,
		filelist: filelistMoudles,
		searchResult: searchresultMoudles,
		monitorData: monitorDataMoudles
	}
};
