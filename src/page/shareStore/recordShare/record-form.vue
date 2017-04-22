<template>
 <div class="record-iscroll">
	<div id="wrapper">
		<div class="bg-white pt-20 pb-20 join-header">
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">项目标题</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.title }}</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">项目类型</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.recordType }}</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">产业集团</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.department }}</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">实施单位</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.brandname }}</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr">生成时间</span>
				<span class="span-6 textOverflow inline app-report-text">{{ hisList.startTime }}</span>
			</div>
			<div class="mb-20">
				<span class="text-light-grey span-3 inline tr vertical-top">备注</span>
			    <span class="span-6 inline app-report-text vertical-top">{{ hisList.remarks }}</span>
			</div>
			<div v-if="hisList.files && hisList.files !== 'null'">
					<span class="text-light-grey span-3 inline tr">附件</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(hisList.files)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ hisList.files | filesNum }}个)</span>
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
				recordIscroll: ''
			};
		},
		created () {
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', '项目档案');
			this.getHistory();
		},
		methods: {
			/*
			 *	获取合作历史
			 */
			getHistory: function () {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/hnabResProject/recordForm',
					params: {
						id: this.$route.query.id
					}
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						//	当数据成功并且有数据时候执行
						if (res.data) {
							console.log(res.data);
							this.hisList = res.data;
						}
					}
					this.$store.commit('loadingHide');
				});
			},
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.recordIscroll) {
				this.recordIscroll.refresh();
			}
		},
		mounted () {
			this.initTop('#wrapper', '.record-iscroll');
			this.recordIscroll = this.initIscroll('#wrapper');
			this.loadmore(this.recordIscroll, this.pullRefresh, this.pullMore);
		},
		beforeDestroy () {
			this.recordIscroll.destroy();
			this.recordIscroll = null;
		}
	};
</script>
