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
				<!-- <div class="pull-down" data-type="all">
					下拉刷新
				</div> -->
				<div class="hisflow text-detail">
					<!-- STEP1 -->
					<div class="row" v-if="hisList.show.step1">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step1.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
							<!-- STEP1展示缩略图 -->
							<div v-if="openIndex !== hisList.index.step1">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
					    				<div v-if="hisList.step1.csrApproval.writwritingTimeingFile && hisList.step1.csrApproval.writwritingTimeingFile !== 'null'">
					    					<span>拟写招标文件</span>
					    					<span class="text-dark-grey">({{ hisList.step1.csrApproval.writwritingTimeingTime? hisList.step1.csrApproval.writwritingTimeingTime : 0 }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step1.csrApproval.writwritingTimeingFile | filesNum }}个)</span>
					    				</div>
					    				<div v-if="hisList.step1.csrApproval.tenderFeedbackFile && hisList.step1.csrApproval.tenderFeedbackFile !== 'null'">
					    					<span>修改招标文件</span>
					    					<span class="text-dark-grey">({{ hisList.step1.csrApproval.feedbackTime? hisList.step1.csrApproval.feedbackTime : 0 }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step1.csrApproval.tenderFeedbackFile | filesNum }}个)</span>
					    				</div>
					    				<div v-if="hisList.step1.csrApproval.finalTenderFile && hisList.step1.csrApproval.finalTenderFile !== 'null'">
					    					<span>定稿招标文件</span>
					    					<span class="text-dark-grey">({{ hisList.step1.csrApproval.finalTime? hisList.step1.csrApproval.finalTime : 0 }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step1.csrApproval.finalTenderFile | filesNum }}个)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
				    				<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP1详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step1Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
						    				<div v-if="detail.csrApproval.writwritingTimeingFile && detail.csrApproval.writwritingTimeingFile !== 'null'">
						    					<span>拟写招标文件</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.writwritingTimeingTime? detail.csrApproval.writwritingTimeingTime : 0 }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.writwritingTimeingFile | filesNum }}个)</span>
						    					<span class="text-dark-grey">{{  detail.csrApprovalHis.statusCode }}</span>
						    				</div>
						    				<div v-if="detail.csrApproval.tenderFeedbackFile && detail.csrApproval.tenderFeedbackFile !== 'null'">
						    					<span>修改招标文件</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.feedbackTime? detail.csrApproval.feedbackTime : 0 }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.tenderFeedbackFile | filesNum }}个)</span>
						    					<span class="text-dark-grey">{{  detail.csrApprovalHis.statusCode }}</span>
						    				</div>
						    				<div v-if="detail.csrApproval.finalTenderFile && detail.csrApproval.finalTenderFile !== 'null'">
						    					<span>定稿招标文件</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.finalTime? detail.csrApproval.finalTime : 0 }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.finalTenderFile | filesNum }}个)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
					    	<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step1,hisList.step1.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step1, 'fa-angle-double-up': openIndex === hisList.index.step1 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP2 -->
					<div class="row" v-if="hisList.show.step2">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step2.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP2缩略图 -->
							<div v-if="openIndex !== hisList.index.step2">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
					    				<div v-if="hisList.step2.csrApproval.grantTenderFile && hisList.step2.csrApproval.grantTenderFile !== 'null'">
					    					<span>发放招标文件</span>
					    					<span class="text-dark-grey">({{ hisList.step2.csrApproval.grantTime? hisList.step2.csrApproval.grantTime : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step2.csrApproval.grantTenderFile | filesNum }}个)</span>
					    				</div>
					    				<div>
					    					<span>收集应标材料</span>
					    					<span class="text-dark-grey">({{ hisList.step2.csrApproval.collectTime? hisList.step2.csrApproval.collectTime : "0.0" }}h)</span>
					    				</div>
					    				<div>
					    					<span>分析应标材料</span>
					    					<span class="text-dark-grey">({{ hisList.step2.csrApproval.analysisTime? hisList.step2.csrApproval.analysisTime : "0.0" }}h)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP2详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step2Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
						    				<div v-if="detail.csrApproval.grantTenderFile && detail.csrApproval.grantTenderFile !== 'null'">
						    					<span>发放招标文件</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.grantTime? detail.csrApproval.grantTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.grantTenderFile | filesNum }}个)</span>
						    				</div>
						    				<div>
						    					<span>收集应标材料</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.collectTime? detail.csrApproval.collectTime : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>分析应标材料</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.analysisTime? detail.csrApproval.analysisTime : "0.0" }}h)</span>
						    				</div>
						    				<div v-if="detail.csrApproval.sendNoticeFile && detail.csrApproval.sendNoticeFile !== 'null'">
						    					<span>发送比稿通知</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.sendTime? detail.csrApproval.sendTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.sendNoticeFile | filesNum }}个)</span>
						    				</div>
						    				<div>
						    					<span>组织招标会耗时</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.organisedTime? detail.csrApproval.organisedTime : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>招标会现场讲标</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.speakMarkTime? detail.csrApproval.speakMarkTime : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>报文</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.messageTime? detail.csrApproval.messageTime : "0.0" }}h)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step2,hisList.step2.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step2, 'fa-angle-double-up': openIndex === hisList.index.step2 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP3 -->
					<div class="row" v-if="hisList.show.step3">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step3.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP3缩略图 -->
							<div v-if="openIndex !== hisList.index.step3">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
					    				<div v-if="hisList.step3.csrApproval.submitPlanFile && hisList.step3.csrApproval.submitPlanFile !== 'null'">
					    					<span>提交执行方案</span>
					    					<span class="text-dark-grey">({{ hisList.step3.csrApproval.documentTime? hisList.step3.csrApproval.documentTime : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step3.csrApproval.submitPlanFile | filesNum }}个)</span>
					    				</div>
					    				<div v-if="hisList.step3.csrApproval.epfmFile && hisList.step3.csrApproval.epfmFile !== 'null'">
					    					<span>修改执行方案</span>
					    					<span class="text-dark-grey">({{ hisList.step3.csrApproval.epfmTime? hisList.step3.csrApproval.epfmTime : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step3.csrApproval.epfmFile | filesNum }}个)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP3详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step3Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
						    				<div v-if="detail.csrApproval.submitPlanFile && detail.csrApproval.submitPlanFile !== 'null'">
						    					<span>提交执行方案</span>
						    					<span class="text-dark-grey">({{detail.csrApproval.documentTime? detail.csrApproval.documentTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.submitPlanFile | filesNum }}个)</span>
						    				</div>
						    				<div v-if="detail.csrApproval.epfmFile && detail.csrApproval.epfmFile !== 'null'">
						    					<span>修改执行方案</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.epfmTime? detail.csrApproval.epfmTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.epfmFile | filesNum }}个)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step3,hisList.step3.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step3, 'fa-angle-double-up': openIndex === hisList.index.step3 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP4 -->
					<div class="row" v-if="hisList.show.step4">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step4.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP4缩略图 -->
							<div v-if="openIndex !== hisList.index.step4">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
				    					<div>
					    					<span>报合同公文1</span>
					    					<span class="text-dark-grey">({{ hisList.step4.csrApproval.contractTime? hisList.step4.csrApproval.contractTime : "0.0" }}h)</span>
					    				</div>
					    				<div>
					    					<span>成立项目工作</span>
					    					<span class="text-dark-grey">({{ hisList.step4.csrApproval.wgTime? hisList.step4.csrApproval.wgTime : "0.0" }}h)</span>
					    				</div>
					    				<div>
					    					<span>准备报告启动会材料</span>
					    					<span class="text-dark-grey">({{ hisList.step4.csrApproval.scienceTime? hisList.step4.csrApproval.scienceTime : "0.0" }}h)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP4详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step4Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
							    			<div>
						    					<span>报合同公文1</span>
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
						    					<span>报合同公文2</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.contractTime2? detail.csrApproval.contractTime2 : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>收集报告设计素材</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.collectTime2? detail.csrApproval.collectTime2 : "0.0" }}h)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step4,hisList.step4.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step4, 'fa-angle-double-up': openIndex === hisList.index.step4 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP5 -->
					<div class="row" v-if="hisList.show.step5">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step5.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP5缩略图 -->
							<div v-if="openIndex !== hisList.index.step5">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
					    				<div v-if="hisList.step5.csrApproval.draftReportDesignFile && hisList.step5.csrApproval.draftReportDesignFile !== 'null'">
					    					<span>提交报告设计初稿</span>
					    					<span class="text-dark-grey">({{ hisList.step5.csrApproval.draftTime? hisList.step5.csrApproval.draftTime : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step5.csrApproval.draftReportDesignFile | filesNum }}个)</span>
					    				</div>
					    				<div v-if="hisList.step5.csrApproval.reportDesignDraftFeedbackFile && hisList.step5.csrApproval.reportDesignDraftFeedbackFile !== 'null'">
					    					<span>修改报告设计初稿</span>
					    					<span class="text-dark-grey">({{ hisList.step5.csrApproval.feedbackTime2? hisList.step5.csrApproval.feedbackTime2 : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step5.csrApproval.reportDesignDraftFeedbackFile | filesNum }}个)</span>
					    				</div>
					    				<div>
					    					<span>报告页数</span>
					    					<span class="text-dark-grey">({{ hisList.step5.csrApproval.reportPages? hisList.step5.csrApproval.reportPages : "0" }}页)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP5详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step5Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
						    				<div v-if="detail.csrApproval.draftReportDesignFile && detail.csrApproval.draftReportDesignFile !== 'null'">
						    					<span>提交报告设计初稿</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.draftTime? detail.csrApproval.draftTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.draftReportDesignFile | filesNum }}个)</span>
						    				</div>
						    				<div v-if="detail.csrApproval.reportDesignDraftFeedbackFile && detail.csrApproval.reportDesignDraftFeedbackFile !== 'null'">
						    					<span>修改报告设计初稿</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.feedbackTime2? detail.csrApproval.feedbackTime2 : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.reportDesignDraftFeedbackFile | filesNum }}个)</span>
						    				</div>
						    				<div>
						    					<span>报告页数</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.reportPages? detail.csrApproval.reportPages : "0" }}页)</span>
						    				</div>
						    				<div>
						    					<span>报告校对</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.proofTime? detail.csrApproval.proofTime : "0.0" }}h)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step5,hisList.step5.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step5, 'fa-angle-double-up': openIndex === hisList.index.step5 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP6 -->
		    		<div class="row" v-if="hisList.show.step6">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step6.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP6缩略图 -->
							<div v-if="openIndex !== hisList.index.step6">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
					    				<div>
					    					<span>第三方认证</span>
					    					<span class="text-dark-grey">({{ hisList.step6.csrApproval.thirdPartyCertification | filesAgree }})</span>
					    				</div>
					    				<div v-if="hisList.step6.csrApproval.thirdPartyCertification !== '0'">
					    					<span>认证单位</span>
					    					<span class="text-dark-grey">({{ hisList.step6.csrApproval.certificationUnit }})</span>
					    				</div>
					    				<div v-if="hisList.step6.csrApproval.thirdPartyCertification !== '0'">
					    					<span>认证标准</span>
					    					<span class="text-dark-grey">({{ hisList.step6.csrApproval.certificationStandards }})</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP6详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step6Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
						    				<div>
						    					<span>第三方认证</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.thirdPartyCertification | filesAgree }})</span>
						    				</div>
						    				<div v-if="detail.csrApproval.thirdPartyCertification !== '0'">
						    					<span>认证单位</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.certificationUnit }})</span>
						    				</div>
						    				<div v-if="detail.csrApproval.thirdPartyCertification !== '0'">
						    					<span>认证标准</span>
						    					<span class="text-dark-grey">({{detail.csrApproval.certificationStandards? detail.csrApproval.certificationStandards : '无'}})</span>
						    				</div>
						    				<div>
						    					<span>部门经理汇报</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.deptmBriefed2Time? detail.csrApproval.deptmBriefed2Time : "0.0" }}h)</span>
						    				</div>
											<div>
						    					<span>报告印刷</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.printingTime? detail.csrApproval.printingTime : "0.0" }}h)</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.printingNum? detail.csrApproval.printingNum : "0" }}册)</span>
						    				</div>
						    				<div>
						    					<span>报告寄送</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.deliveryTime? detail.csrApproval.deliveryTime : "0.0" }}h)</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.deliveryNum? detail.csrApproval.deliveryNum : "0" }}册)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step6,hisList.step6.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step6, 'fa-angle-double-up': openIndex === hisList.index.step6 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP7 -->
		    		<div class="row" v-if="hisList.show.step7">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step7.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP7缩略图 -->
							<div v-if="openIndex !== hisList.index.step7">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
					    				<div v-if="hisList.step7.csrApproval.developSchemeFile && hisList.step7.csrApproval.developSchemeFile !== 'null'">
					    					<span>制定报告传播方案</span>
					    					<span class="text-dark-grey">({{ hisList.step7.csrApproval.schemeTime? hisList.step7.csrApproval.schemeTime : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step7.csrApproval.developSchemeFile | filesNum }}个)</span>
					    				</div>
					    				<div v-if="hisList.step7.csrApproval.schemeUpdateFile && hisList.step7.csrApproval.schemeUpdateFile !== 'null'">
					    					<span>修改传播方案修改</span>
					    					<span class="text-dark-grey">({{ hisList.step7.csrApproval.updateTime? hisList.step7.csrApproval.updateTime : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step7.csrApproval.schemeUpdateFile | filesNum }}个)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP7详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step7Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
						    				<div v-if="detail.csrApproval.developSchemeFile && detail.csrApproval.developSchemeFile !== 'null'">
						    					<span>制定报告传播方案</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.schemeTime? detail.csrApproval.schemeTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.developSchemeFile | filesNum }}个)</span>
						    				</div>
						    				<div v-if="detail.csrApproval.schemeUpdateFile && detail.csrApproval.schemeUpdateFile !== 'null'">
						    					<span>修改传播方案修改</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.updateTime? detail.csrApproval.updateTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.schemeUpdateFile | filesNum }}个)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step7,hisList.step7.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step7, 'fa-angle-double-up': openIndex === hisList.index.step7 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP8 -->
		    		<div class="row" v-if="hisList.show.step8">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step8.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP8缩略图 -->
							<div v-if="openIndex !== hisList.index.step8">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
					    				<div>
					    					<span>报告发布</span>
					    					<span class="text-dark-grey">({{ hisList.step8.csrApproval.releaseTime? hisList.step8.csrApproval.releaseTime : "0.0" }}h)</span>
					    				</div>
					    				<div>
					    					<span>制作嘉宾邀请函</span>
					    					<span class="text-dark-grey">({{ hisList.step8.csrApproval.guestTime? hisList.step8.csrApproval.guestTime : "0.0" }}h)</span>
					    				</div>
					    				<div>
					    					<span>嘉宾邀请</span>
					    					<span class="text-dark-grey">({{ hisList.step8.csrApproval.invitedTime? hisList.step8.csrApproval.invitedTime : "0.0" }}h)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP8详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step8Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
							    			<div>
						    					<span>报告发布</span>
						    					<span class="text-dark-grey">({{detail.csrApproval.releaseTime? detail.csrApproval.releaseTime : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>制作嘉宾邀请函</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.guestTime? detail.csrApproval.guestTime : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>嘉宾邀请</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.invitedTime? detail.csrApproval.invitedTime : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>媒体邀请</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.invitedTime2? detail.csrApproval.invitedTime2 : "0.0" }}h)</span>
						    				</div>
						    				<div>
						    					<span>举办发布</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.conferenceTime? detail.csrApproval.conferenceTime : "0.0" }}h)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step8,hisList.step8.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step8, 'fa-angle-double-up': openIndex === hisList.index.step8 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP9 -->
		    		<div class="row" v-if="hisList.show.step9">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step9.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP9缩略图 -->
							<div v-if="openIndex !== hisList.index.step9">
								<div class="pb-10 pt-10">
					    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
					    			<div class="span-7 inline app-report-text vertical-top">
						    			<div v-if="hisList.step9.csrApproval.pressReleaseWrittenFile && hisList.step9.csrApproval.pressReleaseWrittenFile !== 'null'">
						    				<span>拟写新闻稿</span>
					    					<span class="text-dark-grey">({{ hisList.step9.csrApproval.writtenTime? hisList.step9.csrApproval.writtenTime : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step9.csrApproval.pressReleaseWrittenFile | filesNum }}个)</span>
					    				</div>
					    				<div v-if="hisList.step9.csrApproval.pressReleaseGrantFile && hisList.step9.csrApproval.pressReleaseGrantFile !== 'null'">
						    				<span>新闻稿发放</span>
					    					<span class="text-dark-grey">({{ hisList.step9.csrApproval.grantTime2? hisList.step9.csrApproval.grantTime2 : "0.0" }}h)</span>
					    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					    					<span class="text-dark-grey">({{ hisList.step9.csrApproval.pressReleaseGrantFile | filesNum }}个)</span>
					    				</div>
					    				<div>
					    					<span>报付款公文</span>
					    					<span class="text-dark-grey">({{ hisList.step9.csrApproval.paymentTime? hisList.step9.csrApproval.paymentTime : "0.0" }}h)</span>
					    				</div>
					    			</div>
					    		</div>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP9详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step9Detail">
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
						    			<div class="span-7 inline app-report-text vertical-top">
							    			<div v-if="detail.csrApproval.pressReleaseWrittenFile && detail.csrApproval.pressReleaseWrittenFile !== 'null'">
							    				<span>拟写新闻稿</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.writtenTime? detail.csrApproval.writtenTime : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.pressReleaseWrittenFile | filesNum }}个)</span>
						    				</div>
						    				<div v-if="detail.csrApproval.pressReleaseGrantFile && detail.csrApproval.pressReleaseGrantFile !== 'null'">
							    				<span>新闻稿发放</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.grantTime2? detail.csrApproval.grantTime2 : "0.0" }}h)</span>
						    					<span class="text-red pl-10 pr-10" @click="enterFileImg()"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.pressReleaseGrantFile | filesNum }}个)</span>
						    				</div>
						    				<div>
						    					<span>报付款公文</span>
						    					<span class="text-dark-grey">({{ detail.csrApproval.paymentTime? detail.csrApproval.paymentTime : "0.0" }}h)</span>
						    				</div>
							    			<div>
						    					<span>报告复盘总结会</span>
						    					<span class="text-dark-grey">({{detail.csrApproval.summaryMeetingTime? detail.csrApproval.summaryMeetingTime : "0.0" }}h)</span>
						    				</div>
						    			</div>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr vertical-top">审批意见</span>
						    			<span class="span-7 textOverflow inline app-report-text vertical-top">{{ detail.csrApprovalHis.remarks }}</span>
						    		</div>
						    		<div class="pb-10 pt-10">
						    			<span class="text-light-grey span-2 inline tr">审批结果</span>
						    			<span class="span-5 textOverflow inline app-report-text">{{ detail.csrApprovalHis.status }}</span>
						    		</div>
						    	</div>
				    		</div>
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step9,hisList.step9.csrApprovalHis.thisStep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step9, 'fa-angle-double-up': openIndex === hisList.index.step9 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
				</div>
			    <!-- <div class="pull-up" data-type="all">
					上拉加载更多
				</div> -->
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
				hisList: {
					show: {
						step1: false,
						step2: false,
						step3: false,
						step4: false,
						step5: false,
						step6: false,
						step7: false,
						step8: false,
						step9: false
					},
					index: {
						step1: 1,
						step2: 2,
						step3: 3,
						step4: 4,
						step5: 5,
						step6: 6,
						step7: 7,
						step8: 8,
						step9: 9
					}
				},
				safely: true
			};
		},
		created () {
			this.$store.commit('loadingShow');
		},
		activated () {
			this.$store.commit('changeTitle', 'CSR动态报告审批');
			this.openIndex = '';
			this.safely = true;
			this.hisList = {
				show: {
						step1: false, step2: false, step3: false, step4: false, step5: false, step6: false, step7: false, step8: false, step9: false
					},
				index: {
					step1: 1, step2: 2, step3: 3, step4: 4, step5: 5, step6: 6, step7: 7, step8: 8, step9: 9
				}
			};
			this.getHisList();
	    },
		watch: {
		},
		methods: {
			//	获取列表消息
			getHisList: function () {
				//	loading图加载
				this.$store.commit('loadingShow');
				const self = this;
				console.log(this.$route.query.id);
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrApproval/list',
					params: {
						parentid: self.$route.query.id
					}
				}).then(res => {
					if (res.result) {
						if (res.data && res.data.csrApprovalInfos.length > 0) {
							// console.log(res);
							for (const i of res.data.csrApprovalInfos) {
								self.hisList = Object.assign(self.hisList, i);
							}
							for (let k = 0; k < res.data.csrApprovalInfos.length; k++) {
								self.hisList.show[`step${k + 1}`] = true;
							}
						}
						this.$store.commit('loadingHide');
					}
				});
			},
			//	切换状态
			openResut: function (index) {
				if (index === this.openIndex) {
					this.openIndex = '';
				} else {
					this.openIndex = index;
				}
			},
			//	返回点击结果
			openDetail: function (index, stepIndex) {
				const self = this;
				if (!self.hisList[`step${stepIndex}Detail`] && self.safely) {
					//	loading图加载
					// this.$store.commit('loadingShow');
					self.safely = false;
					this.$post({
						url: '/app/mainReq?reqUrl=/mobile/csrApproval/list',
						params: {
							parentid: self.$route.query.id,
							thisStep: stepIndex
						}
					}).then(res => {
						if (res.result) {
							if (res.data && res.data.csrApprovalInfos.length > 0) {
								self.hisList[`step${stepIndex}Detail`] = res.data.csrApprovalInfos;
								self.openResut(index);
								console.log(self.hisList);
							}
							//	loading图取消
							// this.$store.commit('loadingHide');
							self.safely = true;
						}
					});
				} else {
					self.openResut(index);
				}
			},
			pullmore: function () {

			},
			//	进入附件预览
			enterFileImg: function () {
				this.$router.push({name: 'fileImg'});
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
			// this.loadmore(this.hisReportIscroll, this.pullMore, this.pullMore);
		},
		beforeDestroy () {
			this.hisReportIscroll.destroy();
			this.hisReportIscroll = null;
		}
	};
</script>
