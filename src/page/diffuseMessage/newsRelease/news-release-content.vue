<template>
	<div>
		<div class="iscroll">
			<div id="wrapper">
				<div id="scroller">
					<div class="app-report row bg-white mt-10">
			    		<div class="news-release pt-10 pb-10">
				    		<div class="row">
				    			<span class="common-detail-title">新闻信息概述</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.ndNewsInfo }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">新闻价值判断</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.ndNewsJudgment }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">发布方式</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.ndPublishMode }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">收到时间</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.ndReceiveTime }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">处理人</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.ndHandle }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">是否接到集团领导指示</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.ndDirectiveYesno }}</span>
				    		</div>
				    	</div>
				    </div>
				    <div class="app-report row bg-white mt-10">
			    		<div class="news-release pt-10 pb-10">
				    		<div class="row">
				    			<span class="common-detail-title">交办时间</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.assignTime }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">文稿附件</span>
				    			<span class="common-detail-con">
				    				<span class="text-red pl-10 pr-10" @click="enterFileImg(detailInfo.hnabTraNewsPublish.files)"><i class="fa fa-paperclip" aria-hidden="true"></i>
				    				</span>
				    				({{ detailInfo.hnabTraNewsPublish.files | filesNum }}个)
				    			</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">文稿类型</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.releaseType }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">文稿拟写人</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.author }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">核稿人</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.nuclearDraft }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">发稿负责人</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.sendHead }}</span>
				    		</div>
				    		<div class="row">
				    			<span class="common-detail-title">办文编号</span>
				    			<span class="common-detail-con">{{ detailInfo.hnabTraNewsPublish.OfficeNumber }}</span>
				    		</div>
				    	</div>
				    </div>
			    </div>
			</div>
		</div>
		<div class="check-more text-white row tc" v-if="buttonSum && buttonSum > 0">
			<span class="check-button" @click="reportResult()">通过</span>
			<span class="check-button ml-20 mr-20" @click="reportResult()">驳回</span>
			<span class="check-button" @click="showSearchItem" v-if="buttonSum === 3">提交领导审核</span>
		</div>
		<div class="check-manage" v-show="showSearch" @click.stop.prevent="showSearchItem">
			<div class="check-manage-wrap row" @click.stop="">
				<div class="check-manage-title">
					<span>请选择</span>
				</div>
				<div class="customSearch">
					<input type="text" v-model="customSearch" placeholder="请输入姓名...">
				</div>
				<div class="customRadio">
					<customradios 
					title=""
			  		v-model="radioCheck"
     				:options="newOptions"
			  		></customradios>
				</div>
			  	<div class="radio-button-wrapper">
			  		<div class="row radio-title">
				  		<span class="fl pl-10 width-5">选中的审批人为</span>
				  		<span class="fr pr-10 pl-10 width-7 textOverflow tr">{{ radioCheck }}</span>
				  	</div>
				  	<div class="radio-button" @click.stop.prevent="search">
				  		<span class="block span8">确定</span>
				  	</div>
			  	</div>
			</div>
		</div>
	</div>
</template>

<script>
	import customradios from '../../../components/radios.vue';
	import { MessageBox } from 'mint-ui';
	export default {
		props: ['detailInfo'],
		components: { 'customradios': customradios },
		data () {
			return {
				options: [],
				radioCheck: '',										//	单选选择
				customSearch: '',									//	人物搜索条件
				showSearch: false,									//	展示搜索
				newsConIscroll: '',									//	iscroll容器
				buttonSum: this.detailInfo.buttonNum				//	是否显示按钮标识
			};
		},
		created () {
			console.log(this.button);
			this.$store.commit('changeTitle', '新闻发稿');
			// this.$store.commit('loadingShow');
			this.getApprover();
		},
		computed: {
			/*
			 *	实现输入选择过滤
			 */
            newOptions: function () {
                var that = this;
				return that.options.filter(function (user) {
					return user.userName.toLowerCase().indexOf(that.customSearch.toLowerCase()) !== -1;
				});
            }
        },
		methods: {
			/*	点击切换当前页面tab
			 *	index: tab标识(从0开始)
			 */
			openHeadTab: function (index) {
				this.openIndexHead = index;
			},
			/*
			 *	展示搜索条件页面
			 */
			showSearchItem: function () {
				this.showSearch = !this.showSearch;
			},
			/*
			 *	点击搜索条件,并且隐藏搜索页面
			 */
			search: function () {
				if (this.radioCheck) {
					console.log(this.radioCheck);
				} else {
					this.radioCheck = this.options[0].value;
				}
				this.showSearch = false;
			},
			/*
			 *	获取选择人列表
			 *	roleEname: 非必填，填写了表示只查询该角色下的审批人，不填查询所有
			 */
			getApprover: function () {
				return this.$post({
					url: '/app/mainReq?reqUrl=/util/getApprovalUsers',
					params: {
						roleEname: ''
					}
				}).then(res => {
					if (res.result) {
						if (res.data) {
							this.options = JSON.parse(res.data);
							this.radioCheck = this.options[0].userName;
						}
						// this.$store.commit('loadingHide');
					} else {
						this.options = [];
						// this.$store.commit('loadingHide');
					}
				});
			},
			/*	提交审批结果
			 *
			 */
			reportResult: function (bool) {
				const self = this;
				MessageBox.confirm('确定执行此操作', '提醒').then(action => {
					// self.reportOperate({
					// 	result: self.returnResult(self.resultText),
					// 	resultDetail: self.getAdvice
					// });
					self.detailInfo.buttonNum = 0;
					self.buttonSum = 0;
				}, action => {});
			},
			/*	储存地址
			 *	fileName: 文件地址
			 *	跳转页面
			 */
			enterFileImg: function (fileName) {
				if (fileName) {
					this.$store.commit('setFileList', fileName);
					this.$router.push({name: 'diffuseFileImg'});
				}
			}
		},
		updated () {
			//	刷新iscroll
			if (this.newsConIscroll) {
				this.newsConIscroll.refresh();
			}
			if (!this.buttonSum || this.buttonSum === 0) {
				document.querySelector('#wrapper').style.bottom = '0rem';
			}
		},
		mounted () {
			this.initTop('#wrapper', '.iscroll');
			if (this.buttonSum) {
				document.querySelector('#wrapper').style.bottom = '0.75rem';
			}
			this.newsConIscroll = this.initIscroll('#wrapper');
		},
		beforeDestroy () {
			this.newsConIscroll.destroy();
			this.newsConIscroll = null;
		}
	};
</script>
