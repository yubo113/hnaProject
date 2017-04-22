<template>
	<div class="iscroll pt-10">
		<div id="wrapper">
			<div id="scroller">
				<div class="hisflow text-detail">
					<!-- STEP1 -->
					<div class="row">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>2017-10-10</span>
						</div>
						<div class="bg-white his-main">
							<!-- STEP1展示缩略图 -->
							<div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批人</span>
					    			<span class="span-7 textOverflow inline app-report-text vertical-top">jeffen</span>
					    		</div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
					    			<span class="span-7 textOverflow inline app-report-text vertical-top">同意</span>
					    		</div>
				    		</div>
				    	</div>
				    	<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>2017-10-10</span>
						</div>
						<div class="bg-white his-main">
							<!-- STEP1展示缩略图 -->
							<div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批人</span>
					    			<span class="span-7 textOverflow inline app-report-text vertical-top">jeffen</span>
					    		</div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
					    			<span class="span-7 textOverflow inline app-report-text vertical-top">同意</span>
					    		</div>
				    		</div>
				    	</div>
				    	<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>2017-10-10</span>
						</div>
						<div class="bg-white his-main">
							<!-- STEP1展示缩略图 -->
							<div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批人</span>
					    			<span class="span-7 textOverflow inline app-report-text vertical-top">jeffen</span>
					    		</div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
					    			<span class="span-7 textOverflow inline app-report-text vertical-top">同意</span>
					    		</div>
				    		</div>
				    	</div>
					</div>
			    </div>
			</div>
		</div>
	</div>	
</template>

<script>
	import nodata from '../../../../components/nodata.vue';
	export default {
		components: { 'nodata': nodata },
		data () {
			return {
				//	头部tab详细信息
				headerTab: [{
					text: '审批内容'
				}, {
					text: '审批历史'
				}],
				item: {
					projectName: 'name',
					reportParticipantname: 'shshshsshshddiwuo',
					phone: '17600361839'
				},
				openIndexHead: 0,									//	头部点击标识
				projectList: [],
				storeHisIscroll: '',									//	iscroll容器
				isPullDown: false,
				types: true,
				searchName: '',
				nodata: '暂无数据',
				pageCount: 1
			};
		},
		created () {
			// this.$store.commit('loadingShow');
			// this.getMediaInfo();
		},
		watch: {
		},
		methods: {
			/*	点击切换当前页面tab
			 *	index: tab标识(从0开始)
			 */
			openHeadTab: function (index) {
				this.openIndexHead = index;
			},
			//	进入审批报告
			enterApp: function (people, item) {
			},
			getMediaInfo: function (name) {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrReport/list',
					params: {
						projectName: name,
						pageSize: 6,
						pageNo: this.pageCount
					}
				}).then(res => {
				});
			}
		},
		updated () {
			if (this.storeHisIscroll) {
				this.storeHisIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			this.storeHisIscroll = this.initIscroll('#wrapper');
		},
		beforeDestroy () {
			this.storeHisIscroll.destroy();
			this.storeHisIscroll = null;
		}
	};
</script>
