<template>
	<div class="csr-work" >
		<div class="app-report bg-white pt-20">
			<div class="mb-20">
    			<span class="text-light-grey span-2 inline tr">项目名称</span>
    			<span class="span-7 textOverflow inline app-report-text">{{ this.$route.query.proname }}</span>
    		</div>
    		<div class="mb-20">
    			<span class="text-light-grey span-2 inline tr">参与人</span>
    			<span class="span-7 textOverflow inline app-report-text">{{ this.$route.query.participantname }}</span>
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
								<short-first :step="hisList.step1"></short-first>
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
					    	<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step1,hisList.step1.csrApprovalHis.thisstep)">
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
								<short-second :step="hisList.step2"></short-second>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step2,hisList.step2.csrApprovalHis.thisstep)">
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
								<short-third :step="hisList.step3"></short-third>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step3,hisList.step3.csrApprovalHis.thisstep)">
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
								<short-fourth :step="hisList.step4"></short-fourth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step4,hisList.step4.csrApprovalHis.thisstep)">
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
								<short-fifth :step="hisList.step5"></short-fifth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step5,hisList.step5.csrApprovalHis.thisstep)">
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
								<short-sixth :step="hisList.step6"></short-sixth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step6,hisList.step6.csrApprovalHis.thisstep)">
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
								<short-seventh :step="hisList.step7"></short-seventh>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step7,hisList.step7.csrApprovalHis.thisstep)">
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
								<short-eighth :step="hisList.step8"></short-eighth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step8,hisList.step8.csrApprovalHis.thisstep)">
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
								<short-ninth :step="hisList.step9"></short-ninth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step9,hisList.step9.csrApprovalHis.thisstep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step9, 'fa-angle-double-up': openIndex === hisList.index.step9 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
		    		<!-- STEP10 -->
		    		<div class="row" v-if="hisList.show.step10">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step10.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP10缩略图 -->
							<div v-if="openIndex !== hisList.index.step10">
								<short-tenth :step="hisList.step10"></short-tenth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP10详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step10Detail">
						    		<div class="pb-10 pt-10">
										<detailTenth :detail="detail"></detailTenth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step10,hisList.step10.csrApprovalHis.thisstep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step10, 'fa-angle-double-up': openIndex === hisList.index.step10 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
<!-- STEP11 -->
		    		<div class="row" v-if="hisList.show.step11">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step11.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP11缩略图 -->
							<div v-if="openIndex !== hisList.index.step11">
								<short-eleventh :step="hisList.step11"></short-eleventh>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP11详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step11Detail">
						    		<div class="pb-10 pt-10">
										<detailEleventh :detail="detail"></detailEleventh>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step11,hisList.step11.csrApprovalHis.thisstep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step11, 'fa-angle-double-up': openIndex === hisList.index.step11 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
<!-- STEP12 -->
		    		<div class="row" v-if="hisList.show.step12">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step12.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP12缩略图 -->
							<div v-if="openIndex !== hisList.index.step12">
								<short-twelfth :step="hisList.step12"></short-twelfth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP12详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step12Detail">
						    		<div class="pb-10 pt-10">
										<detailTwelfth :detail="detail"></detailTwelfth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step12,hisList.step12.csrApprovalHis.thisstep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step12, 'fa-angle-double-up': openIndex === hisList.index.step12 }" aria-hidden="true"></i>
			    			</span>
				    	</div>
		    		</div>
<!-- STEP13 -->
		    		<div class="row" v-if="hisList.show.step13">
						<div class="pb-10 his-time text-light-grey">
							<div class="his-tip bg-red"></div>
							<span>{{ hisList.step13.csrApprovalHis.createDate }}</span>
						</div>
						<div class="bg-white mb-20 his-main">
						<!-- STEP13缩略图 -->
							<div v-if="openIndex !== hisList.index.step13">
								<short-thirteenth :step="hisList.step13"></short-thirteenth>
					    		<div class="pb-10">
					    			<span class="span-2 inline"></span>
					    			<span class="span-5 inline text-light-grey app-report-text">......</span>
					    		</div>
				    		</div>
				    		<div v-else>
				    		<!-- STEP13详情 -->
				    			<div class="his-detail bg-white" v-for="detail in hisList.step13Detail">
						    		<div class="pb-10 pt-10">
										<detailThirteenth :detail="detail"></detailThirteenth>
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
				    		<span class="inline text-light-grey his-down pr-20 pl-20" @click="openDetail(hisList.index.step13,hisList.step13.csrApprovalHis.thisstep)">
			    				<i class="fa" v-bind:class="{ 'fa-angle-double-down': openIndex !== hisList.index.step13, 'fa-angle-double-up': openIndex === hisList.index.step13 }" aria-hidden="true"></i>
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
	import shortFirst from './openDayComponents/openDay-short-1.vue';
	import shortSecond from './openDayComponents/openDay-short-2.vue';
	import shortThird from './openDayComponents/openDay-short-3.vue';
	import shortFourth from './openDayComponents/openDay-short-4.vue';
	import shortFifth from './openDayComponents/openDay-short-5.vue';
	import shortSixth from './openDayComponents/openDay-short-6.vue';
	import shortSeventh from './openDayComponents/openDay-short-7.vue';
	import shortEighth from './openDayComponents/openDay-short-8.vue';
	import shortNinth from './openDayComponents/openDay-short-9.vue';
	import shortTenth from './openDayComponents/openDay-short-10.vue';
	import shortEleventh from './openDayComponents/openDay-short-11.vue';
	import shortTwelfth from './openDayComponents/openDay-short-12.vue';
	import shortThirteenth from './openDayComponents/openDay-short-13.vue';
	import detailFirst from './openDayComponents/openDay-detail-1.vue';
	import detailSecond from './openDayComponents/openDay-detail-2.vue';
	import detailThird from './openDayComponents/openDay-detail-3.vue';
	import detailFourth from './openDayComponents/openDay-detail-4.vue';
	import detailFifth from './openDayComponents/openDay-detail-5.vue';
	import detailSixth from './openDayComponents/openDay-detail-6.vue';
	import detailSeventh from './openDayComponents/openDay-detail-7.vue';
	import detailEighth from './openDayComponents/openDay-detail-8.vue';
	import detailNinth from './openDayComponents/openDay-detail-9.vue';
	import detailTenth from './openDayComponents/openDay-detail-10.vue';
	import detailEleventh from './openDayComponents/openDay-detail-11.vue';
	import detailTwelfth from './openDayComponents/openDay-detail-12.vue';
	import detailThirteenth from './openDayComponents/openDay-detail-13.vue';
	
	export default {
		components: {
			'short-first': shortFirst,
			'short-second': shortSecond,
			'short-third': shortThird,
			'short-fourth': shortFourth,
			'short-fifth': shortFifth,
			'short-sixth': shortSixth,
			'short-seventh': shortSeventh,
			'short-eighth': shortEighth,
			'short-ninth': shortNinth,
			'short-tenth': shortTenth,
			'short-eleventh': shortEleventh,
			'short-twelfth': shortTwelfth,
			'short-thirteenth': shortThirteenth,
			'detailFirst': detailFirst,
			'detailSecond': detailSecond,
			'detailThird': detailThird,
			'detailFourth': detailFourth,
			'detailFifth': detailFifth,
			'detailSixth': detailSixth,
			'detailSeventh': detailSeventh,
			'detailEighth': detailEighth,
			'detailNinth': detailNinth,
			'detailTenth': detailTenth,
			'detailEleventh': detailEleventh,
			'detailTwelfth': detailTwelfth,
			'detailThirteenth': detailThirteenth
		},
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
						step9: false,
						step10: false,
						step11: false,
						step12: false,
						step13: false
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
						step9: 9,
						step10: 10,
						step11: 11,
						step12: 12,
						step13: 13
					}
				},
				safely: true
			};
		},
		created () {
			// console.log(this.$route.query.reportParticipantname);
			this.$store.commit('loadingShow');
			this.$store.commit('changeTitle', '海航开放日审批');
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
				return this.$post({
					url: '/app/mainReq?reqUrl=/mobile/csrApproval/list',
					params: {
						parentid: self.$route.query.id
					}
				}).then(res => {
					console.log(res);
					if (res.result) {
						if (res.data && res.data.csrApprovalInfos.length > 0) {
							console.log(res);
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
								// console.log(self.hisList);
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
			/*	储存地址
			 *	fileName: 文件地址
			 *	跳转页面
			 */
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
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
			this.initTop('#wrapper', '.iscroll');
			this.hisReportIscroll = this.initIscroll('#wrapper');
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
