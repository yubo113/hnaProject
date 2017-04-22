<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>收集内容素材</span>
					<span class="text-dark-grey">({{ step.csrApproval.collectMaterialConsuming? step.csrApproval.collectMaterialConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="step.csrApproval.writeDraftFile && step.csrApproval.writeDraftFile !== 'null'">
					<span>编写文字稿</span>
					<span class="text-dark-grey">({{ step.csrApproval.writeDraftConsuming? step.csrApproval.writeDraftConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.writeDraftFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.writeDraftFile | filesNum }}个)</span>
				</div>
				<div v-if="step.csrApproval.draftModifyFile && step.csrApproval.draftModifyFile !== 'null'">
					<span>文字稿反馈修改</span>
					<span class="text-dark-grey">({{ step.csrApproval.draftModifyConsuming? step.csrApproval.draftModifyConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.draftModifyFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.draftModifyFile | filesNum }}个)</span>
				</div>

				<div>
					<span>文字校对</span>
					<span class="text-dark-grey">({{ step.csrApproval.wordsProofreadingCons? step.csrApproval.wordsProofreadingCons : "0.0" }}h)</span>
					&nbsp;&nbsp;
					<!-- 
							<span class="text-dark-grey">({{ step.csrApproval.wordsProofreadingNumber? step.csrApproval.wordsProofreadingNumber : "0" }}次)</span>
					 -->
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['step'],
		data () {
			return {
			};
		},
		methods: {
			enterFileImg: function (fileName) {
				this.$store.commit('setFileList', fileName);
				this.$router.push({name: 'fileImg'});
			}
		},
		mounted () {
		},
		beforeDestroy () {
		}
	};
</script>
