<template>
	<div class="bg-white">
		<div class="pb-10 pt-10">
			<span class="text-light-grey span-2 inline tr vertical-top">审批内容</span>
			<div class="span-7 inline app-report-text vertical-top">
				<div v-if="step.csrApproval.writeMessageFile && step.csrApproval.writeMessageFile !== 'null'">
					<span>拟写报文材料</span>
					
					<span class="text-red pl-10 pr-10" @click="enterFileImg(step.csrApproval.writeMessageFile)"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
					<span class="text-dark-grey">({{ step.csrApproval.writeMessageFile | filesNum }}个)</span>
				</div>				
				<div>
					<span>报文材料初次完成</span>
					<span class="text-dark-grey">({{ step.csrApproval.initialCompletionconsuming? step.csrApproval.initialCompletionconsuming : "0.0" }}h)</span>
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
