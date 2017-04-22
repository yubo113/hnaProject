<template>
<div class="detailed-iscroll">
	<div id="wrapper">
		<div class="bg-white pt-20 pb-20 join-header">
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">机构名称</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.orgName }}</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">关注领域</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.orgFocusAreas }}</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">对接人电话</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.orgUserTel }}</span>
			</div>
			<div>
				<span class="text-light-grey span-3 inline tr vertical-top">机构简介</span>
			    <span class="span-6 inline app-report-text vertical-top">{{ hisList.orgInfo }}</span>
			</div>
		</div>
		<div class="app-report row bg-white pt-20 pl-10 pr-10 pb-20">
    		<div class="mb-20 ">
    			<span class="text-light-grey join-title">合作历史</span>
    		</div>
    		<div class="join-text">
    			<span>于{{ hisList.startTime }}与{{ hisList.orgName }}首次建立合作关系,共合作开发项目{{ hisList.projectNum }}项，规划投入{{ hisList.hisPutinto }}元，已经完成投入{{ hisList.totalPlaInp }}元</span>
    		</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		data () {
			return {
				hisList: {},
				detailedIscroll: ''
			};
		},
		created () {
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', '合作伙伴');
			this.getHistory();
		},
		methods: {
			/*
			 *	获取合作历史
			 */
			getHistory: function () {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/hnabResProject/commform',
					params: {
						id: this.$route.query.id
					}
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						//	当数据成功并且有数据时候执行
						if (res.data) {
							this.hisList = res.data;
						}
					}
					this.$store.commit('loadingHide');
				});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.detailedIscroll) {
				this.detailedIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.detailed-iscroll');
			this.detailedIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.detailedIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.detailedIscroll.destroy();
			this.detailedIscroll = null;
		}
	};
</script>
