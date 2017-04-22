<template>
	<div class="bg-white">
		<div>
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div>
					<span>收集内容素材</span>
					<span class="text-dark-grey">({{ detail.csrApproval.collectMaterialConsuming? detail.csrApproval.collectMaterialConsuming : "0.0" }}h)</span>
				</div>
				<div v-if="detail.csrApproval.writeDraftFile && detail.csrApproval.writeDraftFile !== 'null'">
					<span>编写文字稿</span>
					<span class="text-dark-grey">({{ detail.csrApproval.writeDraftConsuming? detail.csrApproval.writeDraftConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.writeDraftFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.writeDraftFile | filesNum }}个)</span>
				</div>
				<div v-if="detail.csrApproval.draftModifyFile && detail.csrApproval.draftModifyFile !== 'null'">
					<span>文字稿反馈修改</span>
					<span class="text-dark-grey">({{ detail.csrApproval.draftModifyConsuming? detail.csrApproval.draftModifyConsuming : 0 }}h)</span>
					<span class="text-red pl-10 pr-10" @click="enterFileImg(detail.csrApproval.draftModifyFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ detail.csrApproval.draftModifyFile | filesNum }}个)</span>
				</div>

				<div>
					<span>文字校对</span>
					<span class="text-dark-grey">({{ detail.csrApproval.wordsProofreadingCons? detail.csrApproval.wordsProofreadingCons : "0.0" }}h)</span>
					&nbsp;&nbsp;
					<!-- 
							<span class="text-dark-grey">({{ detail.csrApproval.wordsProofreadingNumber? detail.csrApproval.wordsProofreadingNumber : "0" }}次)</span>
					 -->
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
