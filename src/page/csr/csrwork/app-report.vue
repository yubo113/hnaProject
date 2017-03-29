<template>
	<div class="csr-work" >
	    <div class="iscroll">
			<div id="wrapper">
			<div id="scroller">
				<!-- <div class="pull-down" data-type="all">
					下拉刷新
				</div> -->
			    <div>
			    	<div class="app-report row bg-white pt-20">
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr">项目名称</span>
			    			<span class="span-7 textOverflow inline app-report-text">{{ $route.query.projectName }}</span>
			    		</div>
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr">参与人</span>
			    			<span class="span-7 textOverflow inline app-report-text">{{ $route.query.reportParticipantname }}</span>
			    		</div>
			    		<div class="mb-10">
			    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			    			<div class="span-7 inline app-report-text">
			    				<div v-for="(fileItem, index) in appReportDetail.file" :key="index" class="mb-10">
			    					<span>{{  fileItem.detailType }}</span>
			    					<span class="text-dark-grey">({{  fileItem.detailTime }})</span>
			    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
			    				</div>
			    			</div>
			    		</div>
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
			    			<span class="span-7 textOverflow inline app-report-text"><textarea style="width:100%" rows="8" :readonly="readonly"></textarea></span>
			    		</div>
			    		<div class="mb-20">
			    			<span class="text-light-grey span-2 inline tr">审批结果</span>
			    			<span v-if="reported" class="inline app-report-text app-report-button bg-green text-white" @click="reportResult(true)">同意</span>
			    			<span v-if="reported" class="inline app-report-text app-report-button bg-red text-white" @click="reportResult(false)">拒绝</span>
			    			<span v-else class="inline app-report-text app-report-button">{{ resultText }}</span>
			    		</div>
			    	</div>
			    </div>
			    <!-- <div class="pull-up" data-type="all">
					上拉加载更多
				</div> -->
			</div>
			</div>
		</div>
		<div class="check-more tc bg-red text-white" @click="enterHisReport">
			<span>查看历史审批</span>
		</div>
	</div>
</template>

<script>
	import IScroll from 'Iscroll';
	import { MessageBox } from 'mint-ui';
	export default {
		data () {
			return {
				appReportIscroll: '',
				appReportDetail: {
					name: 'APP创建工作',
					people: '张彦军',
					file: [{
						detailType: '拟写招标文件',
						detailTime: '3h'
					}, {
						detailType: '修改招标文件',
						detailTime: '2h'
					}],
					detail: '关于机场建设的建议.PDF'
				},
				reported: true,
				readonly: false
			};
		},
		created () {
			// this.$store.commit('changeTitle', 'CSR动态报告审批');
		},
		activated () {
			this.$store.commit('changeTitle', 'CSR动态报告审批');
			this.reported = true;
			this.readonly = false;
	    },
	    deactivated () {
	    },
		watch: {
		},
		methods: {
			//	审批结果发送
			reportOperate: function (resultObj) {
				this.$post({
					url: '/app/mainReq?reqUrl=/dynrap/hnabCsrDynrAp/approvalResult',
					params: {
						'id': this.$route.query.id,
						'hnabCsrApprovalInfo.status': resultObj.result,
						'hnabCsrApprovalInfo.remarks': resultObj.resultDetail,
						'hnabCsrApprovalInfo.parentid': this.$route.query.id,
						'hnabCsrApprovalInfo.thisStep': this.$route.query.thisStep,
						'mobileLogin': true
					}
				}).then(res => {
					//	当成功返回数据
					if (res.result) {
						console.log(res);
						this.$store.commit('loadingHide');
					} else {
						console.log(res);
						//	当返回数据失败时候，展示相应的
					}
				});
			},
			//	进入历史审批报告
			enterHisReport: function () {
				if (this.readonly) {
					this.$router.replace({name: 'hisReport', query: this.$route.query});
				} else {
					this.$router.push({name: 'hisReport', query: this.$route.query});
				}
			},
			//	返回点击结果
			reportResult: function (bool) {
				const self = this;
				MessageBox.confirm('确定执行此操作', '提醒').then(action => {
					if (bool) {
						self.resultText = '同意';
					} else {
						self.resultText = '拒绝';
					}
					this.reported = false;
					this.readonly = true;
				}, action => {});
				// this.$store.commit('tipShow');
				this.reportOperate({
					result: 1,
					resultDetail: 'this is resultDetail'
				});
			},
			//	进入文件预览
			enterFileImg: function (url) {
				this.$router.replace({name: 'fileImg'});
			}
		},
		updated () {
			//	刷新iscroll
			if (this.appReportIscroll) {
				this.appReportIscroll.refresh();
			}
		},
		mounted () {
			document.querySelector('#wrapper').style.top = `${document.querySelector('.iscroll').offsetTop}px`;
			document.querySelector('#wrapper').style.bottom = '0.7rem';
			this.appReportIscroll = new IScroll('#wrapper', {
				click: true,
				probeType: 2,
                bounceTime: 250,
                bounceEasing: 'quadratic',
                interactiveScrollbars: false,
                hideScrollbar: false
			});
			// this.loadmore(this.appReportIscroll,this.pullMore,this.pullMore);
		},
		beforeDestroy () {
			this.appReportIscroll.destroy();
			this.appReportIscroll = null;
		}
	};
</script>
