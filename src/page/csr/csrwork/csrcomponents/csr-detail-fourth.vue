<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
    			<div>
					<span>报合同公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.contractTime? detail.csrApproval.contractTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>成立项目工作</span>
					<span class="text-dark-grey">({{ detail.csrApproval.wgTime? detail.csrApproval.wgTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>准备报告启动会材料</span>
					<span class="text-dark-grey">({{ detail.csrApproval.scienceTime? detail.csrApproval.scienceTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>举办报告启动会</span>
					<span class="text-dark-grey">({{ detail.csrApproval.startTime? detail.csrApproval.startTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>制作报告素材收集清单</span>
					<span class="text-dark-grey">({{ detail.csrApproval.prmclTime? detail.csrApproval.prmclTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>组织访谈调研</span>
					<span class="text-dark-grey">({{ detail.csrApproval.oisTime? detail.csrApproval.oisTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>提交报告框架</span>
					<span class="text-dark-grey">({{ detail.csrApproval.rfTime? detail.csrApproval.rfTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>修改报告框架</span>
					<span class="text-dark-grey">({{ detail.csrApproval.rffkTime? detail.csrApproval.rffkTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>确定报告框架</span>
					<span class="text-dark-grey">({{ detail.csrApproval.confirmTime? detail.csrApproval.confirmTime : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.submitRoneFile && detail.csrApproval.submitRoneFile !== 'null'">
					<span>提交报告文字初稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.oneTime? detail.csrApproval.oneTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitRoneFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.submitRoneFile && detail.csrApproval.submitRoneFile !== 'null'">
					<span>修改报告文字初稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.roneUpdateTime? detail.csrApproval.roneUpdateTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.submitRoneFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.oneDiscussFile && detail.csrApproval.oneDiscussFile !== 'null'">
					<span>研讨报告文字初稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.discussTime? detail.csrApproval.discussTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.oneDiscussFile | filesNum }}个)</span>
				</div>
				<div>
					<span>报告字数</span>
					<span class="text-dark-grey">({{ detail.csrApproval.reportCount }})</span>
				</div>
				<div>
					<span>文字稿报文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.textMesingTime? detail.csrApproval.textMesingTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>询价报告设计公司</span>
					<span class="text-dark-grey">({{ detail.csrApproval.inpuiryTime? detail.csrApproval.inpuiryTime : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.collectQuoteFile && detail.csrApproval.collectQuoteFile !== 'null'">
					<span>收集设计方案及报价</span>
					<span class="text-dark-grey">({{ detail.csrApproval.collectQuoteTime? detail.csrApproval.collectQuoteTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.collectQuoteFile | filesNum }}个)</span>
				</div>
				<div>
					<span>议价耗时</span>
					<span class="text-dark-grey">({{ detail.csrApproval.bargainingTime? detail.csrApproval.bargainingTime : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.designQuotationFile && detail.csrApproval.designQuotationFile !== 'null'">
					<span>设计方案及报价打分</span>
					<span class="text-dark-grey">({{ detail.csrApproval.designQuotationTime? detail.csrApproval.designQuotationTime : "0.0" }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.designQuotationFile | filesNum }}个)</span>
				</div>
				<div>
					<span>部门总经理汇报</span>
					<span class="text-dark-grey">({{ detail.csrApproval.briefedTime? detail.csrApproval.briefedTime : "0.0" }}h)</span>
				</div>
				<div>
					<span>报合同公文</span>
					<span class="text-dark-grey">({{ detail.csrApproval.contractTime2? detail.csrApproval.contractTime2 : "0.0" }}h)</span>
				</div>
				<div>
					<span>收集报告设计素材</span>
					<span class="text-dark-grey">({{ detail.csrApproval.collectTime2? detail.csrApproval.collectTime2 : "0.0" }}h)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		data () {
			return {
				timeout: ''
			};
		},
		mounted () {
			// const self = this;
			// this.timeout = setTimeout(function () {
			// 	self.$store.commit('loadingHide');
			// }, 1000);
		}
	};
</script>
