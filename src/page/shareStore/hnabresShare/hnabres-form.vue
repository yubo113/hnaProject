<template>
<div class="hnabRes-iscroll">
	<div id="wrapper">
		<div class="bg-white pt-10 pb-10 join-header media-text">
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">题名</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.instName }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">行程日期</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.instBulidDate }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">制度有效性</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.instValidityType }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">制度种类</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.instType }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">发布范围</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.insRange }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">文号</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.instNo }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">产业集团</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.industryGroupName }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">企业全称</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.companyName }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">经办部门</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.deptId }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">联系人</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.insContacts }}</span>
			</div>
			<div class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr vertical-top">备注信息</span>
			    <span class="span-6 inline app-report-text vertical-top">{{ hisList.remarks }}</span>
			</div>
			<div v-if="hisList.files && hisList.files !== 'null'" class="pt-10 pb-10">
				<span class="text-light-grey span-3 inline tr">附件</span>
				<span class="text-red pl-10 pr-10 inline" @click="enterFileImg(hisList.files)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
				<span class="text-dark-grey inline">({{ hisList.files | filesNum }}个)</span>
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
				hnabResIscroll: ''
			};
		},
		created () {
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', '规章制度业务通告');
			this.getHistory();
		},
		methods: {
			/*
			 *	获取合作历史
			 */
			getHistory: function () {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/hnabResProject/hnabResForm',
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
			},
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'hnabresFileImg'});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.hnabResIscroll) {
				this.hnabResIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.hnabRes-iscroll');
			this.hnabResIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.hnabResIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.hnabResIscroll.destroy();
			this.hnabResIscroll = null;
		}
	};
</script>
