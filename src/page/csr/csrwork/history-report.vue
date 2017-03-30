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
						    			<detailFirst :detail="detail"></detailFirst>
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
						    			<detailSecond :detail="detail"></detailSecond>
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
						    			<detailThird :detail="detail"></detailThird>
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
					    					<span>报合同公文</span>
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
										<detailFourth :detail="detail"></detailFourth>
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
										<detailFifth :detail="detail"></detailFifth>
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
										<detailSixth :detail="detail"></detailSixth>
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
										<detailSeventh :detail="detail"></detailSeventh>
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
										<detailEighth :detail="detail"></detailEighth>
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
										<detailNinth :detail="detail"></detailNinth>
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
	import detailFirst from './csrcomponents/csr-detail-first.vue';
	import detailSecond from './csrcomponents/csr-detail-second.vue';
	import detailThird from './csrcomponents/csr-detail-third.vue';
	import detailFourth from './csrcomponents/csr-detail-fourth.vue';
	import detailFifth from './csrcomponents/csr-detail-fifth.vue';
	import detailSixth from './csrcomponents/csr-detail-sixth.vue';
	import detailSeventh from './csrcomponents/csr-detail-seventh.vue';
	import detailEighth from './csrcomponents/csr-detail-eighth.vue';
	import detailNinth from './csrcomponents/csr-detail-ninth.vue';
	export default {
		components: {'detailFirst': detailFirst, 'detailSecond': detailSecond, 'detailThird': detailThird, 'detailFourth': detailFourth, 'detailFifth': detailFifth, 'detailSixth': detailSixth, 'detailSeventh': detailSeventh, 'detailEighth': detailEighth, 'detailNinth': detailNinth},
		data () {
			return {
				hisReportIscroll: null,
				isPullDown: false,
				types: true,
				openIndex: '',
				timeout: '',
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
			this.$store.commit('changeTitle', 'CSR动态报告审批');
			this.getHisList();
		},
		// activated () {
		// 	this.$store.commit('changeTitle', 'CSR动态报告审批');
		// 	this.openIndex = '';
		// 	this.safely = true;
		// 	this.hisList = {
		// 		show: {
		// 				step1: false, step2: false, step3: false, step4: false, step5: false, step6: false, step7: false, step8: false, step9: false
		// 			},
		// 		index: {
		// 			step1: 1, step2: 2, step3: 3, step4: 4, step5: 5, step6: 6, step7: 7, step8: 8, step9: 9
		// 		}
		// 	};
		// 	this.getHisList();
	 //    },
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
					this.$store.commit('loadingShow');
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
							if (self.timeout) {
								clearTimeout(self.timeout);
							}
							self.timeout = setTimeout(function () {
								self.$store.commit('loadingHide');
								self.safely = true;
							}, 500);
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
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
		}
	};
</script>
