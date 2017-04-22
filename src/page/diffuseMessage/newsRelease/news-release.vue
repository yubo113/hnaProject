<template>
	<div>
		<div class="row bg-white pl-10 pr-10">
			<div class="fl width-6 common-tab tc textOverflow" :class="{'common-tab-selected': openIndexHead === index}" v-for="(item, index) in headerTab" :key="index" @click="openHeadTab(index)">
				<span>{{ item.text }}</span>
			</div>
		</div>
		<newsReleaseContent v-if="openIndexHead === 0 && projectObj.hnabTraNewsPublish" :detailInfo="projectObj"></newsReleaseContent>
		<newsReleaseHis v-if="openIndexHead === 1 && projectObj.hnabTraNewsPublish" :detailHis="projectObj"></newsReleaseHis>
	</div>
</template>

<script>
	import newsReleaseContent from './news-release-content.vue';
	import newsReleaseHis from './news-release-his.vue';
	export default {
		components: { 'newsReleaseContent': newsReleaseContent, 'newsReleaseHis': newsReleaseHis },
		data () {
			return {
				//	头部tab详细信息
				headerTab: [{
					text: '审批内容'
				}, {
					text: '审批历史'
				}],
				projectObj: {},									//	返回总数据容器
				openIndexHead: ''								//	头部点击标识
			};
		},
		created () {
			this.$store.commit('changeTitle', '新闻发稿');
			// this.$store.commit('loadingShow');
			this.getNewsRelease();
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
			/*	获取所有新闻发稿信息
			 *	id: 主键码
			 */
			getNewsRelease: function () {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/newsPublish/detail',
					params: {
						id: this.$route.query.id
					}
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						console.log(res);
						if (res.data) {
							this.projectObj = res.data;
							this.getCurrentUser(res.data.hnabTraNewsPublish);
						}
					} else {
						//	当返回数据失败时候
						this.projectObj = {};
						this.$store.commit('loadingHide');
					}
				});
			},
			/*	获取当前用户登录信息
			 *	newsInfo: 数据参数, id: 主键码
			 */
			getCurrentUser: function (newsInfo) {
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/appUtil/getUser'
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						const data = JSON.parse(res.data);
						if (data && newsInfo.assignee === data.loginName) {
							if (newsInfo.taskDefKey === 'usertask1') {
								this.projectObj.buttonNum = 3;
							} else if (newsInfo.taskDefKey === 'usertask2') {
								this.projectObj.buttonNum = 2;
							} else {
								this.projectObj.buttonNum = 0;
							}
						}
						this.$store.commit('loadingHide');
					} else {
						//	当数据失败时候执行
						this.projectObj.buttonNum = 0;
						this.$store.commit('loadingHide');
					}
					this.openIndexHead = 0;
				});
			}
		},
		updated () {
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script>
