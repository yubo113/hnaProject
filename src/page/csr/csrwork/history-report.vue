<template>
	<div class="csr-work" >
		<div class="app-report bg-white pt-20">
			<div class="mb-20">
    			<span class="text-light-grey span-2 inline tr">项目名称</span>
    			<span class="span-7 textOverflow inline app-report-text">{{ this.$route.query.projectName }}</span>
    		</div>
    		<div class="mb-20">
    			<span class="text-light-grey span-2 inline tr">参与人</span>
    			<span class="span-7 textOverflow inline app-report-text">{{ this.$route.query.reportParticipantname }}</span>
    		</div>
		</div>
	    <div class="iscroll">
			<div id="wrapper">
			<div id="scroller">
				<div class="pull-down" data-type="all">
					下拉刷新
				</div>
				<div class="hisflow">
					<div class="row" v-for="(item , index) in hisList" :key="index">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ item.time }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
							<div v-if="openIndex !== index">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr">审批内容</span>
					    			<span class="span-7 textOverflow inline app-report-text">
					    				<span>{{  item.detailType }}</span>:
					    				<span class="text-blue">{{ item.detail }}</span>
					    			</span>
					    		</div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr">审批结果</span>
					    			<span class="span-5 textOverflow inline app-report-text">{{ item.result }}</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    			<div class="his-detail bg-white" v-for="detail in item[`step${index+1}`]">
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr">审批内容</span>
					    			<span class="span-7 textOverflow inline app-report-text">
					    				<span>{{  item.detailType }}</span>:
					    				<span class="text-blue">{{ item.detail }}</span>
					    			</span>
					    		</div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
					    			<span class="span-7 textOverflow inline app-report-text">{{ item.advice }}</span>
					    		</div>
					    		<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr">审批结果</span>
					    			<span class="span-5 textOverflow inline app-report-text">{{ item.result }}</span>
					    		</div>
					    	</div>
				    		</div>
					    	<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(index)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== index, 'fa-angle-double-up': openIndex === index }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
				</div>
			    <div class="pull-up" data-type="all">
					上拉加载更多
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IScroll from 'Iscroll';
	export default {
		data () {
			return {
				hisReportIscroll: null,
				isPullDown: false,
				types: true,
				openIndex: '',
				hisList: [{
					time: '2017-1-13',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					result: '同意'
				}, {
					time: '2017-1-12',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					result: '同意'
				}, {
					time: '2017-1-10',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					result: '同意'
				}, {
					time: '2017-1-9',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					result: '同意'
				}, {
					time: '2017-1-8',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					result: '同意'
				}, {
					time: '2017-1-7',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					result: '拒绝'
				}],
				hisDetailList: [{
					// time:'2017-1-13',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					advice: '同意',
					result: '同意'
				}, {
					// time:'2017-1-12',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					advice: '有待改进',
					result: '拒绝'
				}, {
					// time:'2017-1-10',
					detailType: '招标文件',
					detail: '关于机场建设的建议.PDF',
					advice: '有待改进',
					result: '拒绝'
				}]
			};
		},
		created () {
			console.log('this is created');
		},
		activated () {
			this.getHisList();
	    },
		watch: {
		},
		methods: {
			//	获取列表消息
			getHisList: function () {
				const self = this;
				console.log(this.$route.query.id);
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrApproval/list',
					params: {
						parentid: '7524aa81af7c47988704a7be8dd23c9c'
					}
				}).then(res => {
					if (res.result) {
						if (res.data && res.data.csrApprovalInfos.length > 0) {
							console.log(res);
							self.hisList = res.data.csrApprovalInfos;
							console.log(self.hisList);
						} else {

						}
					}
				});
			},
			//	进入
			enterHisReport: function () {
			},
			//	返回点击结果
			openDetail: function (index) {
				if (index === this.openIndex) {
					this.openIndex = '';
				} else {
					this.openIndex = index;
				}
			},
			pullmore: function () {

			}
		},
		updated () {
			//	刷新iscroll
			if (this.hisReportIscroll) {
				this.hisReportIscroll.refresh();
			}
		},
		mounted () {
			document.querySelector('#wrapper').style.top = `${document.querySelector('.iscroll').offsetTop}px`;
			this.hisReportIscroll = new IScroll('#wrapper', {
				click: true,
				probeType: 2,
                bounceTime: 250,
                bounceEasing: 'quadratic',
                interactiveScrollbars: false,
                hideScrollbar: false
			});
			this.loadmore(this.hisReportIscroll, this.pullMore, this.pullMore);
		},
		beforeDestroy () {
			this.hisReportIscroll.destroy();
			this.hisReportIscroll = null;
		}
	};
</script>
